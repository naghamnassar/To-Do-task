//  add to do
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    var taskList = document.getElementById('taskList');
    var newTask = document.createElement('li');
    newTask.innerHTML = `<span>${taskText}</span> <button onclick="completeTask(this)">Complete</button> <button onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(newTask);

    // Clear input 
    taskInput.value = '';
}

//  complete to do
function completeTask(buttonElement) {
    var taskItem = buttonElement.parentNode;
    taskItem.querySelector('span').style.textDecoration = 'line-through';
    buttonElement.style.display = 'none';
}

// delete to do
function deleteTask(buttonElement) {
    var taskList = document.getElementById('taskList');
    var taskItem = buttonElement.parentNode;
    taskList.removeChild(taskItem);
}
