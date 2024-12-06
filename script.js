
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

// getting the human's choice

const getHumanChoice = () => {
    let choice = prompt("Rock, paper, or scissors?", "Enter your choice!");
    return choice;
}

// storing the human's choice in a variable

// console.log(`The human chose ${humanChoice}.`); // testing

// storing the computer's choice in a variable

// console.log(`The computer chose ${computerChoice}.`); // testing

// keeping score through variables



// logic to play a single round

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    const playRound = () => {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        humanChoice = humanChoice.toLowerCase();
    
        if(humanChoice === 'rock' && computerChoice === 'paper') {
            console.log(`You lose! Paper beats rock!`);
            computerScore ++;
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log(`You win! Rock beats scissors!`);
            humanScore ++;
        } else if (humanChoice === 'rock' && computerChoice === 'rock') {
            console.log(`It's a tie! You both chose rock.`);
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            console.log(`You lose! Scissors beat paper!`);
            computerScore ++;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log(`You won! Paper beats rock!`);
            humanScore ++;
        } else if (humanChoice === 'paper' && computerChoice === 'paper') {
            console.log(`It's a tie! You both chose paper.`);
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            console.log(`You lose! Rock beats scissors!`);
            computerScore ++;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log(`You won! Scissors beat paper!`);
            humanScore ++;
        } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
            console.log(`It's a tie! You both chose scissors.`);
        } else {
            console.log(`Invalid choice. Please enter either rock, paper, or scissors.`);
        }
        console.log(`Human score: ${humanScore}, computer score: ${computerScore}.`);
    }
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

playGame();