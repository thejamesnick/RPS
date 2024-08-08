// RPS game

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getPlayerChoice() {
    let choice = prompt("Enter your choice (Rock, Paper, Scissors): ").toLowerCase();
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt("Invalid choice. Please enter Rock, Paper or Scissors").toLowerCase();
    }
    return choice;
}

function playRound(playerChoice, computerChoice) {
    const winner = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (playerChoice === computerChoice) {
        return "It's a Tie!";
    } else if (winner [playerChoice] === computerChoice) {
        playerScore++;
        return "You Win! " + playerChoice  +  " beats " + computerChoice;
    } else {
        computerScore++;
        return "You Lose! " + computerChoice  +  " beats " + playerChoice;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
    }

    console.log("Final Score:");
    console.log(`You: ${playerScore} | Computer: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Computer win the game");
    } else {
        console.log("It's a Tie!");
    }
}

playGame();