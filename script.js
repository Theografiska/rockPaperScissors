
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
    let amountOfGames = 0;

    const playRound = () => {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        humanChoice = humanChoice.toLowerCase();
    
        if(humanChoice === 'rock' && computerChoice === 'paper') {
            console.log(`You lose! Paper beats rock!`);
            computerScore ++;
            amountOfGames ++;
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log(`You win! Rock beats scissors!`);
            humanScore ++;
            amountOfGames ++;
        } else if (humanChoice === 'rock' && computerChoice === 'rock') {
            console.log(`It's a tie! You both chose rock.`);
            amountOfGames ++;
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            console.log(`You lose! Scissors beat paper!`);
            computerScore ++;
            amountOfGames ++;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log(`You won! Paper beats rock!`);
            humanScore ++;
            amountOfGames ++;
        } else if (humanChoice === 'paper' && computerChoice === 'paper') {
            console.log(`It's a tie! You both chose paper.`);
            amountOfGames ++;
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            console.log(`You lose! Rock beats scissors!`);
            computerScore ++;
            amountOfGames ++;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log(`You won! Scissors beat paper!`);
            humanScore ++;
            amountOfGames ++;
        } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
            console.log(`It's a tie! You both chose scissors.`);
            amountOfGames ++;
        } else {
            console.log(`Invalid choice. Please enter either rock, paper, or scissors.`);
        }
        console.log(`Games played: ${amountOfGames}. Human score: ${humanScore}, computer score: ${computerScore}.`);
    }
    do {
        playRound();
    } while (amountOfGames < 10); // this keeps the amount of games to 10.

    if (amountOfGames === 10) { // Letting know who won after 10 games.
        if (humanScore > computerScore) {
            console.log('Congratz – you are the overall winner!');
        } else if (humanScore < computerScore) {
            console.log(`You lost to the cpu. Better luck next time.`)
        } else {
            console.log(`It's a tie, better luck next time.`)
        }
    }
}

playGame();