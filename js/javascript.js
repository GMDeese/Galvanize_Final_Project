var user;
function captureInput(event) {
  user = event.target.value;
  console.log(user);
}

function addUser() {
  var newItem = document.createElement("li");
  newItem.innerText = user;
  document.getElementById("list").appendChild(newItem);
  newItem.setAttribute("class", "option");
  var dropdownList = document.getElementsByClassName("users");
  for (var i = 0; i < dropdownList.length; i++) {
    // Access each Dropdown list element
    dropdownList[i];
    // Create and options element
    var createOption = document.createElement("option");
    // update createOption with user list item
    createOption.innerText = user;
    // Append options element with dropdown element
    dropdownList[i].appendChild(createOption);
    var inputfield = document.getElementById("userInput");
    document.getElementById("userInput").reset();
  }
}

document.getElementById("userInput").addEventListener("change", captureInput);
document.getElementById("add").addEventListener("click", addUser);
