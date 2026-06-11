
# 📘 Assignment: Hangman Game Challenge

## 🎯 Objective

Build the classic Hangman word-guessing game to practice string manipulation, control flow, and user interaction in Python.

## 📝 Tasks

### 🛠️ Implement the Game Loop

#### Description
Create the main game loop that selects a random word and processes player guesses until they win or run out of attempts.

#### Requirements
Completed program should:

- Randomly select words from a predefined list
- Accept letter guesses and show current progress (e.g., `_ _ a _ _`)
- Track and display the number of incorrect guesses remaining
- End when the word is fully guessed or attempts are exhausted
- Display clear win/lose messages

### 🛠️ Input Validation and UX

#### Description
Improve the game's user experience by validating input and handling repeated guesses.

#### Requirements
Completed program should:

- Ignore non-letter inputs and inform the player
- Prevent counting repeated correct or incorrect guesses as new attempts
- Provide a short help/instructions message at the start

---

## Starter files

- `starter-code.py` — minimal scaffold to help you start the Hangman game

## Tips

- Use the `random.choice()` function to pick a word from a list
- Keep the game loop simple and test incrementally
