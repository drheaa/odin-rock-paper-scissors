let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) return "Rock";
  if (random === 1) return "Paper";
  return "Scissors";
}

function playRound(humanChoice, computerChoice) {
  // Convert to lowercase for consistency
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  let resultMessage = "";
  
  if (humanChoice === computerChoice) {
    resultMessage = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore += 1;
    resultMessage = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore += 1;
    resultMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  updateUI(resultMessage);
}

function updateUI(resultMessage) {
  // Update result text
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = resultMessage;

  // Update scores
  const playerScoreSpan = document.getElementById("player-score");
  const computerScoreSpan = document.getElementById("computer-score");
  playerScoreSpan.textContent = humanScore;
  computerScoreSpan.textContent = computerScore;
}

// Event listeners for buttons
document.getElementById("rock").addEventListener("click", () => {
  playRound("Rock", getComputerChoice());
});

document.getElementById("paper").addEventListener("click", () => {
  playRound("Paper", getComputerChoice());
});

document.getElementById("scissors").addEventListener("click", () => {
  playRound("Scissors", getComputerChoice());
});
