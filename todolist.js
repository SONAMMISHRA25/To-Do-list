// Selecting the necessary elements
const inputBox = document.querySelector("#input");
const addButton = document.querySelector("#addbut");
const listContainer = document.querySelector(".add-content");

// Function to add a new task
function addTask() {
    // Getting the input value
    const taskText = inputBox.value.trim();

    // Checking if the input value is empty
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Creating a new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Creating a close button for the list item
    const closeButton = document.createElement('span');
    closeButton.textContent = '\u00D7';
    closeButton.classList.add('close');

    // Appending the close button to the list item
    listItem.appendChild(closeButton);

    // Appending the new list item to the list container
    listContainer.appendChild(listItem);

    // Clearing the input box
    inputBox.value = '';

    // Saving the updated list to localStorage
    saveList();
}

// Function to remove a task
function removeTask(event) {
    if (event.target.classList.contains('close')) {
        const listItem = event.target.parentElement;
        listItem.remove();

        // Saving the updated list to localStorage
        saveList();
    }
}

// Function to save the list to localStorage
function saveList() {
    localStorage.setItem('todoList', listContainer.innerHTML);
}

// Function to load the list from localStorage
function loadList() {
    const savedList = localStorage.getItem('todoList');
    if (savedList) {
        listContainer.innerHTML = savedList;
    }
}

// Event listener for adding a task
addButton.addEventListener('click', addTask);

// Event listener for removing a task
listContainer.addEventListener('click', removeTask);

// Load the list from localStorage when the page loads
loadList();
