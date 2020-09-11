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
  }
}

function generateUserStory1(event) {
  console.log("event", event);
  var userDefined = document.getElementById("dropdown1").value;
  var textAreas = document.getElementsByClassName("textarea");
  var results = document.getElementById("story1");

  results.innerHTML =
    "<i>User Story #1</i>" + "<br />" + "<br />" + "As a(n) " + userDefined;
  results.innerHTML +=
    ", " +
    textAreas[0].value +
    ", " +
    textAreas[1].value +
    ". " +
    "<br />" +
    "<br />" +
    "<u>Aceptance Criteria: </u>" +
    "<br />" +
    textAreas[2].value;
}

function generateUserStory2(event) {
  console.log("event", event);
  var userDefined = document.getElementById("dropdown2").value;
  var textAreas = document.getElementsByClassName("textarea");
  var results = document.getElementById("story2");

  results.innerHTML =
    "<i>User Story #2</i>" + "<br />" + "<br />" + "As a(n) " + userDefined;
  results.innerHTML +=
    ", " +
    textAreas[0].value +
    ", " +
    textAreas[1].value +
    ". " +
    "<br />" +
    "<br />" +
    "<u>Aceptance Criteria: </u>" +
    "<br />" +
    textAreas[2].value;
}

function generateUserStory3(event) {
  console.log("event", event);
  var userDefined = document.getElementById("dropdown3").value;
  var textAreas = document.getElementsByClassName("textarea");
  var results = document.getElementById("story3");

  results.innerHTML =
    "<i>User Story #3</i>" + "<br />" + "<br />" + "As a(n) " + userDefined;
  results.innerHTML +=
    ", " +
    textAreas[0].value +
    ", " +
    textAreas[1].value +
    ". " +
    "<br />" +
    "<br />" +
    "<u>Aceptance Criteria: </u>" +
    "<br />" +
    textAreas[2].value;
}

function generateUserStory4(event) {
  console.log("event", event);
  var userDefined = document.getElementById("dropdown4").value;
  var textAreas = document.getElementsByClassName("textarea");
  var results = document.getElementById("story4");

  results.innerHTML =
    "<i>User Story #4</i>" + "<br />" + "<br />" + "As a(n) " + userDefined;
  results.innerHTML +=
    ", " +
    textAreas[0].value +
    ", " +
    textAreas[1].value +
    ". " +
    "<br />" +
    "<br />" +
    "<u>Aceptance Criteria: </u>" +
    "<br />" +
    textAreas[2].value;
}

function generateUserStory5(event) {
  console.log("event", event);
  var userDefined = document.getElementById("dropdown5").value;
  var textAreas = document.getElementsByClassName("textarea");
  var results = document.getElementById("story5");

  results.innerHTML =
    "<i>User Story #5</i>" + "<br />" + "<br />" + "As a(n) " + userDefined;
  results.innerHTML +=
    ", " +
    textAreas[0].value +
    ", " +
    textAreas[1].value +
    ". " +
    "<br />" +
    "<br />" +
    "<u>Aceptance Criteria: </u>" +
    "<br />" +
    textAreas[2].value;
}

function generateUserStory6(event) {
  console.log("event", event);
  var userDefined = document.getElementById("dropdown6").value;
  var textAreas = document.getElementsByClassName("textarea");
  var results = document.getElementById("story6");

  results.innerHTML =
    "<i>User Story #6</i>" + "<br />" + "<br />" + "As a(n) " + userDefined;
  results.innerHTML +=
    ", " +
    textAreas[0].value +
    ", " +
    textAreas[1].value +
    ". " +
    "<br />" +
    "<br />" +
    "<u>Aceptance Criteria: </u>" +
    "<br />" +
    textAreas[2].value;
}

function generateUserStory7(event) {
  console.log("event", event);
  var userDefined = document.getElementById("dropdown7").value;
  var textAreas = document.getElementsByClassName("textarea");
  var results = document.getElementById("story7");

  results.innerHTML =
    "<i>User Story #7</i>" + "<br />" + "<br />" + "As a(n) " + userDefined;
  results.innerHTML +=
    ", " +
    textAreas[0].value +
    ", " +
    textAreas[1].value +
    ". " +
    "<br />" +
    "<br />" +
    "<u>Aceptance Criteria: </u>" +
    "<br />" +
    textAreas[2].value;
}

function generateUserStory8(event) {
  console.log("event", event);
  var userDefined = document.getElementById("dropdown8").value;
  var textAreas = document.getElementsByClassName("textarea");
  var results = document.getElementById("story8");

  results.innerHTML =
    "<i>User Story #8</i>" + "<br />" + "<br />" + "As a(n) " + userDefined;
  results.innerHTML +=
    ", " +
    textAreas[0].value +
    ", " +
    textAreas[1].value +
    ". " +
    "<br />" +
    "<br />" +
    "<u>Aceptance Criteria: </u>" +
    "<br />" +
    textAreas[2].value;
}

function generateUserStory9(event) {
  console.log("event", event);
  var userDefined = document.getElementById("dropdown9").value;
  var textAreas = document.getElementsByClassName("textarea");
  var results = document.getElementById("story9");

  results.innerHTML =
    "<i>User Story #9</i>" + "<br />" + "<br />" + "As a(n) " + userDefined;
  results.innerHTML +=
    ", " +
    textAreas[0].value +
    ", " +
    textAreas[1].value +
    ". " +
    "<br />" +
    "<br />" +
    "<u>Aceptance Criteria: </u>" +
    "<br />" +
    textAreas[2].value;
}

function generateUserStories(event) {
  console.log("create all user stories");
  document
    .getElementById("submitButton")
    .addEventListener("click", generateUserStory1);
  document
    .getElementById("submitButton")
    .addEventListener("click", generateUserStory2);
  document
    .getElementById("submitButton")
    .addEventListener("click", generateUserStory3);
  document
    .getElementById("submitButton")
    .addEventListener("click", generateUserStory4);
  document
    .getElementById("submitButton")
    .addEventListener("click", generateUserStory5);
  document
    .getElementById("submitButton")
    .addEventListener("click", generateUserStory6);
  document
    .getElementById("submitButton")
    .addEventListener("click", generateUserStory7);
  document
    .getElementById("submitButton")
    .addEventListener("click", generateUserStory8);
  document
    .getElementById("submitButton")
    .addEventListener("click", generateUserStory9);
}

document.getElementById("userInput").addEventListener("change", captureInput);
document.getElementById("add").addEventListener("click", addUser);
document
  .getElementById("submitButton")
  .addEventListener("click", generateUserStories);
