// initializing global variables
let randomInt = 0;
let playerSelection = 0;
let computerSelection = 0;
let playerScore = 0;
let computerScore = 0;
let result = 0;
const buttons = document.querySelectorAll('button');

// algorithm for getting a random integer
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomInt = Math.floor(Math.random() * (max - min + 1) + min);
    
    return randomInt;
}

// uses getRandomIntInclusive() to get 1, 2, or 3 at random
// rock, paper, and scissors are assigned to 1, 2, and 3, respectively
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

// computer takes its turn
// uses playerSelection from the forEach loop to return which button was pressed
// begins by restarting the score and wiping the end-game message, if necessary
// tallies results each round, ending when one player has 5
function playRound(playerSelection) {
    computerPlay();
    if (playerScore === 5 || computerScore === 5) { 
        document.getElementById('outcome').textContent = ''; 
        playerScore = 0;
        computerScore = 0;
    }
    
    if (playerSelection === computerSelection) {
        result = `You tied... That's kinda lame.`;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        result = 'You won! Rock smashes Scissors.';
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        result = 'You lost... Rock gets covered by Paper.';
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        result = 'You won! Paper smothers Rock.';
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        result = 'You lost... Paper gets cut by Scissors.';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        result = 'You won! Scissors eviscerates Paper.';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        result = 'You lost... Scissors gets crushed by Rock.';
    }
    else {
        result = 'There seems to be an error.';
    }
    checkWinner();
    document.getElementById('roundResult').textContent = `${result}`;
    document.getElementById('tally').textContent = `You: ${playerScore} | Computer: ${computerScore}`;
}

// loop that iterates around our button elements
// >> adds click event listener
// >> finds which button was pressed
// >> begins a new round of Rock, Paper, Scissors with that information
buttons.forEach(function (i) {
    i.addEventListener('click', () => {
    playerSelection = i.getAttribute('class');
    playRound(playerSelection);
    })
});


function checkWinner() {
    if ( playerScore === 5 ) {
        document.getElementById('outcome').textContent = 'Congratulations! You won! Feel free to play again.';
    }
    else if (computerScore === 5 ) {
        document.getElementById('outcome').textContent = 'The computer beat you this time. Feel free to play again.';
       }
    };