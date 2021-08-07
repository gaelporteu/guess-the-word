// unordered list where the player’s guessed letters will appear
const playersGuessedLetters = document.querySelector(".guessed-letters");
// button with the text “Guess!” in it
const guessButton = document.querySelector(".guess");
// text input where the player will guess a letter
const playerInput = document.querySelector(".guess-form input");
// empty paragraph where the word in progress will appear
const buildWordInProgress = document.querySelector(".word-in-progress");
// paragraph where the remaining guesses will display
const playersRemainingGuesses = document.querySelector(".remaining");
// span inside the paragraph where the remaining guesses will display
const playersRemainingGuessesSpan = document.querySelector(".remaining span");
// empty paragraph where messages will appear when the player guesses a letter
const playerMessage = document.querySelector(".message");
// hidden button that will appear prompting the player to play again
const hiddenPlayAgainButton = document.querySelector(".play-again.hide");
// Magnolia is your starting word to test out the game
const word = "Magnolia";

// circle symbols (●) to represent each letter in the word
const updateWordInProgress = (word) => {
    
}


