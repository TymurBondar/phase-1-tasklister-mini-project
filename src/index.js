document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('submitInput').onclick = function() {
    event.preventDefault();
    //create element
    let inputField = document.getElementById("new-task-description");
    let inputValue = inputField.value;
    var newLi = document.createElement('li')
    var node = document.createTextNode(inputValue);
    newLi.appendChild(node);
    document.getElementById('tasks').appendChild(newLi);
    console.log("button clicked");
    //
  };
  //add the users input to the newly created li element
});