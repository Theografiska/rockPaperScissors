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

const buttons = document.querySelectorAll("button");

// adding event listeners to each button:

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = button.id; // getting the human's choice
        playRound();
    });
})

// results div: 

const resultsDiv = document.querySelector("#results-div");
const para = document.createElement("p");
para.textContent = "";
resultsDiv.appendChild(para);

const overallScore = document.createElement("p");
overallScore.textContent = "";
resultsDiv.appendChild(overallScore);

const playRound = () => {
    let computerChoice = getComputerChoice();
    humanChoice = humanChoice.toLowerCase();
    let computerScore = 0;
    let humanScore = 0;
    let amountOfGames = 0;
    
    if(humanChoice === 'rock' && computerChoice === 'paper') {
            para.textContent = `You chose rock, computer chose paper. You lose – paper beats rock!`;
            computerScore ++;
            amountOfGames ++;
            overallScore.textContent = `Total score: you ${humanScore}, computer ${computerScore}.`
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            para.textContent = `You chose rock, computer chose scissors. You win – rock beats scissors!`;
            humanScore ++;
            amountOfGames ++;
            overallScore.textContent = `Total score: you ${humanScore}, computer ${computerScore}.`
    } else if (humanChoice === 'rock' && computerChoice === 'rock') {
            para.textContent = `You both chose rock – it's a tie!`;
            amountOfGames ++;
            overallScore.textContent = `Total score: you ${humanScore}, computer ${computerScore}.`
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            para.textContent = `You lose! Scissors beat paper!`;
            computerScore ++;
            amountOfGames ++;
            overallScore.textContent = `Total score: you ${humanScore}, computer ${computerScore}.`
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            para.textContent = `You won! Paper beats rock!`;
            humanScore ++;
            amountOfGames ++;
            overallScore.textContent = `Total score: you ${humanScore}, computer ${computerScore}.`
    } else if (humanChoice === 'paper' && computerChoice === 'paper') {
            para.textContent = `It's a tie! You both chose paper.`;
            amountOfGames ++;
            overallScore.textContent = `Total score: you ${humanScore}, computer ${computerScore}.`
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            para.textContent = `You lose! Rock beats scissors!`;
            computerScore ++;
            amountOfGames ++;
            overallScore.textContent = `Total score: you ${humanScore}, computer ${computerScore}.`
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            para.textContent = `You won! Scissors beat paper!`;
            humanScore ++;
            amountOfGames ++;
            overallScore.textContent = `Total score: you ${humanScore}, computer ${computerScore}.`
    } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
            para.textContent = `It's a tie! You both chose scissors.`;
            amountOfGames ++;
            overallScore.textContent = `Total score: you ${humanScore}, computer ${computerScore}.`
    } else {
            para.textContent = `Invalid choice. Please enter either rock, paper, or scissors.`;
            overallScore.textContent = `Total score: you ${humanScore}, computer ${computerScore}.`
    }
}
/*
    do {
        playRound();
    } while (amountOfGames < 10); // this keeps the amount of games to 10.

    if (amountOfGames === 10) { // Letting know who won after 10 games.
        if (humanScore > computerScore) {
            alert('Congratz – you are the overall winner! Games played: ${amountOfGames}. Human score: ${humanScore}, computer score: ${computerScore}.');
        } else if (humanScore < computerScore) {
            alert(`You lost to the cpu. Better luck next time. Games played: ${amountOfGames}. Human score: ${humanScore}, computer score: ${computerScore}.`)
        } else {
            alert(`It's a tie, better luck next time. Games played: ${amountOfGames}. Human score: ${humanScore}, computer score: ${computerScore}.`)
        }
    }

    console.log(`Games played: ${amountOfGames}. Human score: ${humanScore}, computer score: ${computerScore}.`);

*/