function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) return "Rock";
    if (random === 1) return "Paper";
    return "Scissors";
  }

  function getHumanChoice() {
    const input = prompt("Enter Rock, Paper or Scissors:");
    return input;
  }

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore += 1;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore += 1;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

    console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
  }

  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("Final Result:");
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (humanScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("The game is a tie!");
  }
}

playGame()