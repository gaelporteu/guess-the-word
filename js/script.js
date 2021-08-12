// unordered list where the player’s guessed letters will appear
const playersGuessedLetters = document.querySelector(".guessed-letters");
// button with the text “Guess!” in it
const guessButton = document.querySelector(".guess");
// text input where the player will guess a letter
const playerInput = document.querySelector(".guess-form input");
// empty paragraph where the word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress");
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
// array will contain all the letters the player guesses
const guessedLetters = [];

// circle symbols (●) to represent each letter in the word
const updateWordInProgress = (word) => {
  // empty arry to place each letter into
  lettersInWord = [];
  for (const letter of word) {
    console.log(letter)
    // push each letter into the array
    lettersInWord.push("●")
  }
  // output the string of dots to the html element
  wordInProgress.innerHTML = lettersInWord.join("")
}
updateWordInProgress(word);

// event listener for when a player clicks the Guess button
guessButton.addEventListener("click", e => {
  // prevent the default behavior of clicking a button in a form
  e.preventDefault();
  // variable to capture the value of the input
  const inputValue = playerInput.value;
  console.log(inputValue);
  // empty the value of the input
  playerInput.value = "";
  // empty the message element
  playerMessage.innerHTML = "";
  // call checkIsInputLetter using inputValue as argument
  checkIsInputLetter(inputValue);
});

// function that accepts the input value as a parameter
const checkIsInputLetter = (inputValue) => {
  // regular expression to ensure the player inputs a letter 
  const acceptedLetter = /[a-zA-Z]/;
  
  // check if the input is empty
  if (inputValue === "") {
    console.log("Please enter a letter");
    return "Please enter a letter";
  } else if (inputValue.length > 1) {
    console.log("You can only enter one letter");
    return "You can only enter one letter";
  } else if (!inputValue.match(acceptedLetter)) {
    console.log("You can only enter alpha character");
    return "You can only enter alpha character";
  }
  return inputValue;
}

const makeGuess = letter => {
    // const letterUpperCase = letter.toUpperCase();
    console.log(letter);
  }
