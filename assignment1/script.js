const container = document.getElementById('container');
const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');

// Add paragraph
addBtn.addEventListener('click', function () {
    const newPara = document.createElement('p');
    newPara.textContent = "This is a new paragraph.";
    container.appendChild(newPara);
});

// Remove last paragraph
removeBtn.addEventListener('click', function () {
    if (container.children.length > 0) {
        container.removeChild(container.lastChild);
    }
});
