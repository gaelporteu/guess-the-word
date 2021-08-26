// unordered list where the player’s guessed letters will appear
const playerGuessedLetters = document.querySelector(".guessed-letters");
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
const hiddenPlayAgainButton = document.querySelector(".play-again");
// form label that says "Type one letter"
const label = document.querySelector("label")

// Magnolia is your starting word to test out the game
let word = "Magnolia";
// array will contain all the letters the player guesses
const guessedLetters = [];
// Declare a Global Variable for the Number of Guesses
let remainingGuesses = 8;

// async funtion to retrieve a random word
const getWords = async () => {
  const request = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt") ;
  
  // the await keyword turns it from a Promise to an array
  const words = await request.text();
  
  // convert words into an array separate by line break
  const wordsArray = words.split("\n");
  
  // grab a random word from the array
  const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  
  
  word = randomWord.trim();
  console.log(word);
  hideWord(word)
}; 



// circle symbols (●) to represent each letter in the word
const hideWord = word => {
  // empty array to place each letter into
  const lettersInWord = [];
  for (const letter of word) {
    // console.log(letter)
    
    // push each letter into the array
    lettersInWord.push("●")
  }
  // output the string of dots to the html element
  wordInProgress.innerHTML = lettersInWord.join("")
}

getWords();

// event listener/handler for when a player clicks the Guess button
guessButton.addEventListener("click", e => {
  // prevent the default behavior of clicking a button in a form
  e.preventDefault();
  // variable to capture the value of the input
  const inputValue = playerInput.value;
  // console.log(inputValue);
  // empty the value of the input
  playerInput.value = "";
  // empty the message element
  playerMessage.innerHTML = "";
  // call checkIsInputLetter using inputValue as argument
  checkIsInputLetter(inputValue);
});

// function that accepts the input value as a parameter
const checkIsInputLetter = inputValue => {
  // regular expression to ensure the player inputs a letter 
  const acceptedLetter = /[a-zA-Z]/;
  // check if the input is empty
  if (inputValue === "") {
    return playerMessage.innerHTML = "Please enter a letter.";
  // check if the input is more than 1 letter
  } else if (inputValue.length > 1) {
    return playerMessage.innerHTML = "You can only enter one letter.";
  // check if the input is a letter 
  } else if (!inputValue.match(acceptedLetter)) {
    return playerMessage.innerHTML = "You can only enter an alphabetical character from A-Z.";
  } else {
    // return the value of the function so that it is accessible to the makeGuess function
  // call the makeGuess function with the argument checkInput
  makeGuess(inputValue);
  }
}

// function that accepts a letter as a parameter
const makeGuess = letter => {
  // converts letter to uppercase
  const letterUpperCase = letter.toUpperCase();
  // if guessedLetters array contains letter do something
  if (guessedLetters.includes(letterUpperCase)) {
    // return the message to player
    return playerMessage.innerHTML = `You've already guessed the ${letterUpperCase}, please try again.`;
  } else {
    countGuessesRemaining(letter)
    // else add letter to the array
    guessedLetters.push(letterUpperCase);
  }
  console.log(guessedLetters);
  updateWordInProgress()
  // call the update letters guess function
  updatePageWithPlayerGuesses();
}

// this function will show the letters that have been guessed on screen
const updatePageWithPlayerGuesses = () => {
  // this will empty what is contained between the "ul" element
  playerGuessedLetters.innerHTML = "";
  // this will add each letter from the guessedLetters array to the screen
  for (const letter of guessedLetters) {
    // this creates an "li" element for each letter in the guessedLetters array
    const listGuessedLetters = document.createElement("li");
    // this puts the letter into the "li" element
    listGuessedLetters.innerHTML = letter;
    // this adds the "li" element (with the letter) to the "ul" element
    playerGuessedLetters.append(listGuessedLetters);
  }
}

// function will replace the circle symbols with the correct letters guessed
const updateWordInProgress = () => {
  // convert word to uppercase
  const wordUpper = word.toUpperCase();
  const wordArray = wordUpper.split("")
  console.log(wordArray);
  // replaces the "●" with letters in the word
  const revealWord = [];
  for (const letter of wordArray) {
    if (guessedLetters.includes(letter)) {
      revealWord.push(letter);
    } else {
      revealWord.push("●")
    }
  }
  wordInProgress.innerHTML = revealWord.join("");
  checkIfPlayerWon(revealWord);
}

// function to count guesses remaining
const countGuessesRemaining = guess => {
  const upperCaseWord = word.toUpperCase().split("");
  if (!upperCaseWord.includes(guess.toUpperCase())) {
    remainingGuesses -= 1;
    playerMessage.innerHTML = `The word doesn't contain the letter ${guess.toUpperCase()}`;
    playersRemainingGuessesSpan.innerHTML = `${remainingGuesses} guess(es)`
  } else {
    return playerMessage.innerHTML = "The word contains your letter, nice."
  }

  if (remainingGuesses < 1) {
    startOver();
    return playerMessage.innerHTML = `You have lost the word was ${word}.`
  }
}

// Function to Check If the Player Won
const checkIfPlayerWon = revealWord => {
  const wordArray = word.toUpperCase().split("")
  console.log(revealWord);
  if (revealWord.every((letter, index) => letter === wordArray[index])) {
    playerMessage.classList.add("win");
    startOver();
    playerMessage.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;
    wordArray.length = 0;
  }
}

const startOver = () => {
  guessButton.classList.toggle("hide");
  playerGuessedLetters.classList.toggle("hide");
  playersRemainingGuesses.classList.toggle("hide");
  playerInput.classList.toggle("hide");
  label.classList.toggle("hide");
  hiddenPlayAgainButton.classList.toggle("hide");

  hiddenPlayAgainButton.addEventListener("click", e => {
    // location.reload();
    playerMessage.classList.toggle("win");
    playerMessage.innerHTML = "";
    playerGuessedLetters.classList.toggle("hide");
    playersRemainingGuesses.classList.toggle("hide");
    playerInput.classList.toggle("hide");
    label.classList.toggle("hide");
    guessButton.classList.toggle("hide");
    playerGuessedLetters.innerHTML = "";
    remainingGuesses = 8;
    guessedLetters.length = 0;
    playersRemainingGuessesSpan.innerHTML = `${remainingGuesses} guess(es)`;
    getWords();
    hiddenPlayAgainButton.classList.toggle("hide");
  })
}