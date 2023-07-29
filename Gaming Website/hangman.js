const words = [  "apple",  "banana",  "orange",  "pear",  "grape",  "pineapple",  "watermelon",  "strawberry",  "kiwi",  "mango"];

let chosenWord = "";
let guessedLetters = [];
let wrongGuesses = 0;

function chooseWord() {
  chosenWord = words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
  let display = "";
  for (let i = 0; i < chosenWord.length; i++) {
    if (guessedLetters.includes(chosenWord[i])) {
      display += `${chosenWord[i]} `;
    } else {
      display += `_ `;
    }
  }
  document.getElementById("word").textContent = display;
}


function displayHangman() {
  const hangmanAscii = [    "  +---+\n  |   |\n      |\n      |\n      |\n      |\n=========",    "  +---+\n  |   |\n  O   |\n      |\n      |\n      |\n=========",    "  +---+\n  |   |\n  O   |\n  |   |\n      |\n      |\n=========",    "  +---+\n  |   |\n  O   |\n /|   |\n      |\n      |\n=========",    "  +---+\n  |   |\n  O   |\n /|\\  |\n      |\n      |\n=========",    "  +---+\n  |   |\n  O   |\n /|\\  |\n /    |\n      |\n=========",    "  +---+\n  |   |\n  O   |\n /|\\  |\n / \\  |\n      |\n========="  ];
  document.getElementById("hangman-ascii").textContent = hangmanAscii[wrongGuesses];
}

function displayAlphabet() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let display = "";
  for (let i = 0; i < letters.length; i++) {
    if (guessedLetters.includes(letters[i])) {
      if (chosenWord.includes(letters[i])) {
        display += `<button class="letter" style="color: green" disabled>${letters[i]}</button>`;
      } else {
        display += `<button class="letter" style="color: red" disabled>${letters[i]}</button>`;
      }
    } else {
      display += `<button class="letter" onclick="guessLetter('${letters[i]}')">${letters[i]}</button>`;
    }
  }
  document.getElementById("alphabet").innerHTML = display;
}

function guessLetter(letter) {
  if (guessedLetters.includes(letter)) {
    return; // letter already guessed, do nothing
  }
  guessedLetters.push(letter);
  if (!chosenWord.includes(letter)) {
    wrongGuesses++;
    displayHangman();
  } else {
    displayWord();
  }
  checkGameOver();
}

function checkGameOver() {
  if (wrongGuesses === 6) {
    alert(`Game over! The word was "${chosenWord}".`);
    resetGame();
  } else if (!document.getElementById("word").textContent.includes("_")) {
    alert("You win!");
    resetGame();
  }
}

function resetGame() {
  guessedLetters = [];
  wrongGuesses = 0;
  chooseWord();
  displayWord();
  displayHangman();
  displayAlphabet();
}

chooseWord();
displayWord();
displayHangman();
displayAlphabet();
