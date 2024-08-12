// My Javascript

// input of from the DOM

const playerDisplay = document.getElementById('player-choice');
const computerDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('resultDsisplay');

let playerScore = 0;
let computerScore = 0;

// The Game choice
const choices = ['rock', 'paper', 'scissors'];

function Game(playerChoice) {

    const getComputerChoice = choices[Math.floor(Math.random() * choices.length)];

    const getResult = function (playerChoice, getComputerChoice) {
        const winner = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        };

        if (playerChoice === getComputerChoice) {
            return 'It\'s a tie! 🤝 ';
        } else if (winner[playerChoice] === getComputerChoice) {
            playerScore++;
            return 'You win! 🎉 ' + playerChoice + ' beats ' + getComputerChoice;
        } else {
            computerScore++;
            return 'You lose! 💩 ' + getComputerChoice + ' beats ' + playerChoice;
        }
    }

    const result = getResult(playerChoice, getComputerChoice);
    resultDisplay.textContent = result;
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${getComputerChoice}`;
}