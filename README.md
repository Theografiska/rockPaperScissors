# Rock Paper Scissors Game
This project is a simple Rock, Paper, Scissors game implemented in JavaScript. The game is played against the computer, with scores tracked over 10 rounds to determine the overall winner.

Live version: https://theografiska.github.io/rockPaperScissors/. 

---

## How It Works
1. Player Choice: The player enters their choice of rock, paper, or scissors using a prompt.
2. omputer Choice: The computer randomly selects its choice.
3. Game Logic: The winner for each round is determined based on the classic rules:
- Rock beats Scissors.
- Scissors beat Paper.
- Paper beats Rock.
4. Scorekeeping: Both the player’s and the computer’s scores are tracked.
5. Game End: After 10 rounds, the final scores are tallied, and the overall winner is announced.

---

## Features
* Randomized Computer Choice: The computer uses a random number generator to select rock, paper, or scissors.
* Input Validation: Ensures that the player enters a valid choice.
* Score Tracking: Displays scores after each round and provides a summary at the end of the game.
* Limited Rounds: Automatically ends the game after 10 rounds.

---

## Code Structure
### Functions
1. getComputerChoice()
* Generates a random choice for the computer.
2. getHumanChoice()
* Prompts the player to input their choice.
3. playRound()
* Executes a single round, compares choices, and updates scores.
4. playGame()
* Orchestrates the game, ensuring it runs for 10 rounds and displays the overall result.

---

## How to Play
1. Copy the code into a browser console or a JavaScript runtime environment.
2. Run the script.
3. Enter your choice (rock, paper, or scissors) when prompted.
4. Check the console for results and score updates after each round.
5. Play until the game declares a winner after the first player reaches 5 wins.
6. There's an option to reset the play after that. 

---

## Technologies Used
JavaScript: The core logic and functionality are implemented using JavaScript.

---

## Contributing
Contributions are welcome! To enhance the game:
1. Fork the repository.
2. Make changes or add features (e.g., graphical interface, customizable round limits).
3. Submit a pull request.

---

## License
This project is licensed under the MIT License. Feel free to modify and distribute it as you like.

Enjoy the game! 🎮