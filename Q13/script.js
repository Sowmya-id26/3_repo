const textArea = document.getElementById("noteBox");
const btnSave = document.getElementById("saveBtn");
const btnLoad = document.getElementById("loadBtn");
const btnDelete = document.getElementById("clearBtn");

function loadExisting() {
    let savedText = localStorage.getItem("storedNotes");
    if (savedText) {
        textArea.value = savedText;
    }
}

btnSave.addEventListener("click", () => {
    let content = textArea.value.trim();
    if (content.length === 0) {
        alert("Enter something before saving.");
        return;
    }
    localStorage.setItem("storedNotes", content);
    alert("Notes have been stored.");
});

btnLoad.addEventListener("click", () => {
    let savedText = localStorage.getItem("storedNotes");
    if (savedText) {
        textArea.value = savedText;
    } else {
        alert("Nothing saved yet.");
    }
});

btnDelete.addEventListener("click", () => {
    localStorage.removeItem("storedNotes");
    textArea.value = "";
});

window.addEventListener("load", loadExisting);
