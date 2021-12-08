// create a function called computerPlay
// create a function that generates a random number between 1 and 3
// if 1, return 'Rock'
// if 2, return 'Paper'
// if 3, return 'Scissors'
let randomInt = 0;
let playerSelection = 0;
let computerSelection = 0;
let playerScore = 0;
let computerScore = 0;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomInt = Math.floor(Math.random() * (max - min + 1) + min);
    
    return randomInt;
}

function computerPlay() {
    getRandomIntInclusive(1,3);
    if (randomInt === 1) {
        computerSelection = 'rock';
    }
    else if (randomInt === 2) {
        computerSelection = 'paper';
    }
    else if (randomInt === 3) {
        computerSelection = 'scissors';
    }
    else {
        return 'Error!';
    }

    return computerSelection;
}

// write a function that plays a round of rock paper scissors
// take a playerSelection parameter
// take a computerSelection parameter
// compare them and calculate a winner 
// return a string that declares the winner

function playerPlay() {
    playerSelection = prompt("Do you choose Rock, Paper, or Scissors?").toLowerCase();
    
    return playerSelection;
}

function playRound() {
    playerPlay();
    computerPlay();
    if (playerSelection === computerSelection) {
        alert('You tied!');
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        alert('You won! Rock crushes Scissors.');
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        alert('You lost. Rock gets covered by Paper.');
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        alert('You won! Paper covers Rock.');
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        alert('You lost. Paper gets cut by Scissors.');
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        alert('You won! Scissors cuts paper.');
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        alert('You lost. Scissors gets crushed by rock.');
    }
    else {
        alert('There seems to be an error');
    }
    
    console.log('You: ' + playerScore + '. Computer: ' + computerScore + '.');
}

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (playerScore > computerScore) {
        console.log('Congratulations! You won!');
    }
    else if (playerScore < computerScore) {
        console.log('The computer beat you this time.');
       }
    else {
    console.log('Looks like a tie!');
    }
    playerScore = 0;
    computerScore = 0;
}