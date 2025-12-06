const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const searchBox = document.getElementById("searchBox");
const taskList = document.getElementById("taskList");

let taskItems = [];
let searchText = "";

function loadFromStorage() {
    const raw = localStorage.getItem("todoItems");
    taskItems = raw ? JSON.parse(raw) : [];
}

function saveToStorage() {
    localStorage.setItem("todoItems", JSON.stringify(taskItems));
}

function createTaskElement(task) {
    const li = document.createElement("li");
    li.className = "task-item";
    if (task.done) li.classList.add("completed");

    const left = document.createElement("div");
    left.className = "task-left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;

    const span = document.createElement("span");
    span.textContent = task.text;
    span.className = "task-text";

    left.appendChild(checkbox);
    left.appendChild(span);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Delete";
    removeBtn.className = "delete-btn";

    li.appendChild(left);
    li.appendChild(removeBtn);

    checkbox.addEventListener("change", () => {
        task.done = !task.done;
        saveToStorage();
        renderTasks();
    });

    removeBtn.addEventListener("click", () => {
        taskItems = taskItems.filter(item => item.id !== task.id);
        saveToStorage();
        renderTasks();
    });

    return li;
}

function renderTasks() {
    taskList.innerHTML = "";
    const filtered = taskItems.filter(item =>
        item.text.toLowerCase().includes(searchText.toLowerCase())
    );
    filtered.forEach(task => {
        const element = createTaskElement(task);
        taskList.appendChild(element);
    });
}

addTaskBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text.length === 0) return;
    const newTask = {
        id: Date.now(),
        text: text,
        done: false
    };
    taskItems.push(newTask);
    taskInput.value = "";
    saveToStorage();
    renderTasks();
});

searchBox.addEventListener("input", () => {
    searchText = searchBox.value;
    renderTasks();
});

window.addEventListener("load", () => {
    loadFromStorage();
    renderTasks();
});
