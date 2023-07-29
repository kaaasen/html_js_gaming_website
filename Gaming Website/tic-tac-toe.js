var humanPlayer = "X";
var computerPlayer = "O";
var cells = document.getElementsByTagName("td");
var gameOver = false;
var gameResult = document.getElementById("game-result");

// Array of winning combinations
var winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    if (!gameOver && this.innerHTML == "") {
      this.innerHTML = humanPlayer;
      if (checkWin(humanPlayer)) {
        gameResult.innerHTML = humanPlayer + " wins!";
        gameOver = true;
      } else if (checkTie()) {
        gameResult.innerHTML = "It's a tie!";
        gameOver = true;
      } else {
        setTimeout(computerMove, getRandomInt(500, 1500));
      }
    }
  });
}

// Function for the computer move
function computerMove() {
  var availableCells = [];
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML == "") {
      availableCells.push(i);
    }
  }
  var randomIndex = Math.floor(Math.random() * availableCells.length);
  cells[availableCells[randomIndex]].innerHTML = computerPlayer;
  if (checkWin(computerPlayer)) {
    gameResult.innerHTML = computerPlayer + " wins!";
    gameOver = true;
  } else if (checkTie()) {
    gameResult.innerHTML = "It's a tie!";
    gameOver = true;
  }
}

// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to check for a win
function checkWin(player) {
  for (var i = 0; i < winCombinations.length; i++) {
    var winCombo = winCombinations[i];
    if (cells[winCombo[0]].innerHTML == player &&
      cells[winCombo[1]].innerHTML == player &&
      cells[winCombo[2]].innerHTML == player) {
      return true;
    }
  }
  return false;
}

// Function to check for a tie
function checkTie() {
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML == "") {
      return false;
    }
  }
  return true;
}

// Function to reset the game
function resetGame() {
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
  gameResult.innerHTML = "";
  gameOver = false;
}

// Add event listener to reset button
var resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function() {
  resetGame();
});
