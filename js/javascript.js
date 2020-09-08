var task;
function captureInput(event) {
  task = event.target.value;
  console.log(task);
}

function addTask() {
  var newItem = document.createElement("li");
  newItem.innerText = task;
  document.getElementById("list").appendChild(newItem);
}

document.getElementById("todo").addEventListener("change", captureInput);
document.getElementById("add").addEventListener("click", addTask);
