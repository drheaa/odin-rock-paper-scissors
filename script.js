function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3); 

  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

console.log("Computer's Choice", getComputerChoice());

function getHumanChoice() {
    const userInput = prompt("Enter Rock, Paper, or Scissors:");
    return userInput;
}

console.log("Human's Choice", getHumanChoice());
