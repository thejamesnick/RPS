// RPS game

// After writing the code multiple times, i want to do by my self and let's see how far id go.
// I will try to use the knowledge i have gained from the previous lessons and see how far i can go.

// Get Start Scores.

let playerScore = 0;
let computerScore = 0;

// Get Computer input
function getComputerChoice () {
    const choices =[ 'rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Get User Input

function getPlayerChoice() {
    let choice = prompt("Enter your choice: 'Rock, Paper, Scissors'").toLowerCase();
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt("Invalid Entry! Enter your choice: 'Rock, Paper, Scissors'").toLowerCase();
    }
    return choice;
}

// The game rule and the winning conditions

function playRound(playerChoice, computerChoice) {
    const winner = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (winner[playerChoice] === computerChoice) {
        playerScore++;
        return "You Win! " + playerChoice + " beats " + computerChoice;
    } else {
        computerScore++;
        return "You Lose! " + computerChoice + " beats " + playerChoice;
    }
}

// The game function

function playGame() {
    for (let i = 0; i < 5; i++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
    }

    console.log("Final Score:");
    console.log(`You: ${playerScore} | Computer: ${computerScore}`);

    // The Scoring System

    if (playerScore > computerScore) {
        console.log("You Win!");
    } else if (playerScore < computerScore) {
        console.log("You Lose!");
    } else {
        return "It's a tie!";
    }
}

playGame();