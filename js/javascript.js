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


funtion addstory() {
  var newStory = document.createElement("li");
  newItem.innertext = document
  document.getElementById("stories").appendChild(newItem);
  var storyList = document.getElementsByClassName("textarea1");
  for (var i = 0; i < dropdownlist.length; i++) {
  
    // Access each story list element
      storyList[i]
    // Create Story Element
      var createStory = document.createElement("li")
    // update story with option dropdown value and textareas in the class
      createStory.innerText = 
    // Append story element with dropdown value and textareas in the class
      storylist[i].appendChild(createStory);
    var finalStory = document.getElementById("submitButton");
  }
  

}
//Create list element for each user story

document.getElementById("userInput").addEventListener("change", captureInput);
document.getElementById("add").addEventListener("click", addUser);
