// getting computer's choice

const getComputerChoice = () => {
    const randomNo = Math.floor(Math.random()* 3);
    let choice;
    switch (randomNo) {
        case 0: 
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissors';
            break;
    }
    return choice;
}

// accessing buttons through the DOM:

const rock = document.querySelector("#rock-button");
const paper = document.querySelector("#paper-button");
const scissors = document.querySelector("#scissors-button");

let humanChoice = "";

// Accessing all buttons at once:

const buttonSection = document.querySelector("#button-section");
const buttons = document.querySelectorAll(".game-button");

// adding event listeners to each button:

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = button.id; // getting the human's choice
        playRound();
    });
})

// Section for displaying results: 

const resultsDiv = document.querySelector("#results-div");
const para = document.createElement("p");
para.textContent = "";
resultsDiv.appendChild(para);

const overallScore = document.createElement("p");
overallScore.textContent = "";
resultsDiv.appendChild(overallScore);

// initializing the score outside of functions

let computerScore = 0;
let humanScore = 0;

// announcing the score and winner

const getScore = () => {
    if (computerScore < 5 && humanScore < 5) {
        overallScore.textContent = `Total score: you ${humanScore}, computer ${computerScore}.`
    } else {
        buttonSection.style.display = "none"; // removing the buttons
        if (computerScore > 4) {
            overallScore.textContent = `Game over, you lost. Total score: you ${humanScore}, computer ${computerScore}.`
        } else if (humanScore > 4) {
            overallScore.textContent = `Well done, you won overall. Total score: you ${humanScore}, computer ${computerScore}.`
        }
        // adding a reset button when game finishes:
        const resetButton = document.createElement("button");
        resetButton.textContent = "Reset the game";
        resultsDiv.appendChild(resetButton);
        resetButton.addEventListener("click", () => {
            resetButton.style.display = "none"; // removing the reset button after click
            buttonSection.style.display = "block"; // returning the game-buttons
            para.textContent = "";
            overallScore.textContent = "";
            computerScore = 0;
            humanScore = 0;
        })
    }
}

const playRound = () => {
    let computerChoice = getComputerChoice();
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === 'rock' && computerChoice === 'paper') {
                para.textContent = `You lose! You chose rock, computer chose paper.`;
                computerScore ++;
                getScore();
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
                para.textContent = `You win! You chose rock, computer chose scissors.`;
                humanScore ++;
                getScore();
    } else if (humanChoice === 'rock' && computerChoice === 'rock') {
                para.textContent = `It's a tie! You both chose rock.`;
                getScore();
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
                para.textContent = `You lose! You chose paper, computer chose scissors.`;
                computerScore ++;
                getScore();
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
                para.textContent = `You win! You chose paper, computer chose rock.`;
                humanScore ++;
                getScore();
    } else if (humanChoice === 'paper' && computerChoice === 'paper') {
                para.textContent = `It's a tie! You both chose paper.`;
                getScore();
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
                para.textContent = `You lose! You chose scissors, computer chose rock!`;
                computerScore ++;
                getScore();
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
                para.textContent = `You win! You chose scissors, computer chose paper.`;
                humanScore ++;
                getScore();
    } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
                para.textContent = `It's a tie! You both chose scissors.`;
                getScore();
    } else {
                para.textContent = `Invalid choice. Please enter either rock, paper, or scissors.`;
                getScore();
        }
}

// adding a reset button

