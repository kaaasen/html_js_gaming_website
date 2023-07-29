const gameDiv = document.getElementById("game");
const choicesDiv = document.getElementById("choices");
const playAgainButton = document.getElementById("play-again");

let playerChoice;

function simulateGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const results = {
    rock: {
      rock: "Tie!",
      paper: "You lose!",
      scissors: "You win!",
    },
    paper: {
      rock: "You win!",
      paper: "Tie!",
      scissors: "You lose!",
    },
    scissors: {
      rock: "You lose!",
      paper: "You win!",
      scissors: "Tie!",
    },
  };

  const result = results[playerChoice][computerChoice];
  return { computer_choice: computerChoice, result };
}

function playGame() {
  // Display the available choices
  choicesDiv.style.display = "flex";

  // Add click event listeners to the choices buttons
  const choices = document.querySelectorAll(".choice");
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      playerChoice = choice.id;
      choicesDiv.style.display = "none";

      // Simulate the game
      const data = simulateGame(playerChoice);

      const { computer_choice: computerChoice, result } = data;
      gameDiv.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
      playAgainButton.style.display = "block";
    });
  });
}

playAgainButton.addEventListener("click", () => {
  gameDiv.textContent = "";
  playAgainButton.style.display = "none";
  playGame();
});

playGame();
