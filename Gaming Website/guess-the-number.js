var randomNumber = Math.floor(Math.random() * 50) + 1;
var remainingGuesses = 5;

function checkGuess() {
  var guess = parseInt(document.getElementById("guess").value);
  var output = document.getElementById("output");
  var guessInput = document.getElementById("guess");

  if (guess === randomNumber) {
    output.innerHTML = "You are the champion!";
  } else {
    remainingGuesses--;
    if (remainingGuesses === 0) {
      output.innerHTML = "Sorry, you lost. The correct number was " + randomNumber + ".";
    } else {
      var message = "Sorry, that's not correct. ";
      if (guess < randomNumber) {
        message += "Your guess is too low. ";
      } else {
        message += "Your guess is too high. ";
      }
      message += "You have " + remainingGuesses + " guesses left.";
      output.innerHTML = message;
      guessInput.value = "";
    }
  }
}
