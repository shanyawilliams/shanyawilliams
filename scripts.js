//Variables declaration start
var nameInput = document.getElementById('name-input');
var userNameText = document.getElementById('user-name');

var gameStartElement = document.getElementById('game-start');
var passage1Element = document.getElementById('passage-1');
var passage2Element = document.getElementById('passage-2');
var passage3Element = document.getElementById('passage-3');
var passage4Element = document.getElementById('passage-4');
var passage5Element = document.getElementById('passage-5');
var passage6Element = document.getElementById('passage-6');
var passage7Element = document.getElementById('passage-7');


var playerName = '';

//start Game function, when the user press the button
function startGame() {
  playerName = nameInput.value;

  if (playerName != '') {
    //test if the user has insert a name
    passage1Function();

  } else {
    //otherwise, update error message and toggle modal box
    errorMessage('Please Insert your name');
  }
}

function passage1Function() {
  userNameText.innerHTML = playerName; //replace user name inside span on passage1
  gameStartElement.hidden = true; //make gameStartElement invisible
  passage1Element.hidden = false; //make passage1Element visible
}

function passage2Function() {
  userNameText.innerHTML = playerName; //replace user name inside span on passage1
  gameStartElement.hidden = true; //make gameStartElement invisible
  passage1Element.hidden = true;
  passage5Element.hidden = false; //make passage2Element visible

}
function passage3Function() {
  userNameText.innerHTML = playerName; //replace user name inside span on passage1
  userNameText.innerHTML = playerName;
  gameStartElement.hidden = true;
  passage1Element.hidden = true; //make passage1Element invisible
  passage2Element.hidden = true; //make passage2Element visible
  passage3Element.hidden = false; //make passage2Element visible
  passage4Element.hidden = true; //make passage2Element visible
  passage5Element.hidden = false; //make passage2Element visible
  passage6Element.hidden = false; //make passage2Element visible
  passage7Element.hidden = false; //make passage2Element visible
}
function passage4Function() {
  userNameText.innerHTML = playerName; //replace user name inside span on passage1
  userNameText.innerHTML = playerName;
  gameStartElement.hidden = true;
  passage1Element.hidden = true; //make passage1Element invisible
  passage2Element.hidden = true; //make passage2Element visible
  passage3Element.hidden = true; //make passage2Element visible
  passage4Element.hidden = false; //make passage2Element visible
  passage5Element.hidden = false; //make passage2Element visible
  passage6Element.hidden = false; //make passage2Element visible
  passage7Element.hidden = false; //make passage2Element visible
}
function passage5Function() {
  userNameText.innerHTML = playerName; //replace user name inside span on passage1
  userNameText.innerHTML = playerName;
  gameStartElement.hidden = true;
  passage1Element.hidden = true; //make passage1Element invisible
  passage2Element.hidden = true; //make passage2Element visible
  passage3Element.hidden = true; //make passage2Element visible
  passage4Element.hidden = true; //make passage2Element visible
  passage5Element.hidden = false; //make passage2Element visible
  passage6Element.hidden = false; //make passage2Element visible
  passage7Element.hidden = false; //make passage2Element visible
}
function passage6Function() {
  userNameText.innerHTML = playerName; //replace user name inside span on passage1
  userNameText.innerHTML = playerName;
  gameStartElement.hidden = true;
  passage1Element.hidden = true; //make passage1Element invisible
  passage2Element.hidden = true; //make passage2Element visible
  passage3Element.hidden = true; //make passage2Element visible
  passage4Element.hidden = true; //make passage2Element visible
  passage5Element.hidden = true; //make passage2Element visible
  passage6Element.hidden = false; //make passage2Element visible
  passage7Element.hidden = true; //make passage2Element visible
}
function passage7Function() {
  userNameText.innerHTML = playerName; //replace user name inside span on passage1
  userNameText.innerHTML = playerName;
  gameStartElement.hidden = true;
  passage1Element.hidden = true; //make passage1Element invisible
  passage2Element.hidden = true; //make passage2Element visible
  passage3Element.hidden = true; //make passage2Element visible
  passage4Element.hidden = true; //make passage2Element visible
  passage5Element.hidden = false; //make passage2Element visible
  passage6Element.hidden = false; //make passage2Element visible
  passage7Element.hidden = true; //make passage2Element visible
}
//function to process options clicks, it checks the id name
function clickFunction(id) {
  if (id == 'option-food') {
    //test if id == option-1
    passage2Function();
  } else if (id == 'option-2') {
    //test if id == option-2
    passage3Function();
  } else if (id == 'option-3') {
    //test if id == option-3
    passage4Function();
  }
  else if (id == 'option-4') {
    //test if id == option-3
    passage5Function();
  }
  else if (id == 'option-5') {
    //test if id == option-3
    passage6Function();
  }
  else if (id == 'option-6') {
    //test if id == option-3
    passage7Function();
  }
}


function errorMessage(message) {
  //generic funciton to show modal with error message
  document.getElementById('error-msg').innerHTML = message; //replace innerHTML with message
  $('#error-msg-box').modal('show');
}
