const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const task = taskInput.value;
  if (task !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" class="checkbox" onchange="toggleTask(this)">
      <span>${task}</span>
      <button class="delete-button" onclick="deleteTask(this.parentNode)">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function toggleTask(checkbox) {
  const task = checkbox.nextElementSibling;
  task.classList.toggle("completed");
}

function deleteTask(taskItem) {
  taskList.removeChild(taskItem);
}
