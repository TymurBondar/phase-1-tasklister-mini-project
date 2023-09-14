function completeTask(button) {
  const taskList = document.getElementById("tasks");
  const taskItem = button.parentElement;
  taskList.removeChild(taskItem);
}

document.getElementById('submitInput').onclick = function () {
  event.preventDefault(); //prevents reloading of the page

  let inputField = document.getElementById("new-task-description");
  let inputValue = inputField.value;

  //creates and append a li element
  let newLi = document.createElement('li')
  newLi.classList.add("task");

  newLi.innerHTML = `
        <label>${inputValue}</label>
        <button class="complete-button" onclick="completeTask(this)">✅</button>
    `;

  //let node = document.createTextNode(inputValue);
  //newLi.appendChild(node);
  document.getElementById('tasks').appendChild(newLi);
  document.getElementById('new-task-description').value = "";
};