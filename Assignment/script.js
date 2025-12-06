const container = document.getElementById('container');
const addButton = document.getElementById('addbutton');
const removeButton = document.getElementById('Removebutton');
addButton.addEventListener('click', () => {
    const paragraph = document.createElement('p');
    paragraph.textContent = "This is a new paragraph.";
    container.appendChild(paragraph);
});
removeButton.addEventListener('click', () => {
    if (container.children.length > 0) {   
        container.removeChild(container.lastChild);
    }
});
