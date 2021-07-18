const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessLetter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const spanOfGuesses = document.querySelector(".remaining span");
const playerMessage = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");

// console.log(guessButton); // test to see if working
// console.log(spanOfGuesses); // test to see if working

const word = "magnolia";

const lettersNotInWord = [];

const hideLetter = () => {
    // console.log(word);
    for (let letter of word) {
        wordInProgress.innerText += "●";
    }
}

hideLetter(word)

guessButton.addEventListener("click" , e => {
    e.preventDefault();
    const myLetter = guessLetter.value;
    console.log(myLetter);
    guessLetter.value = ""; // this clears the box after clicking
    // console.log(checkInput(myLetter));
    checkInput(myLetter);
})

const checkInput = myLetter => {
    const acceptedLetter = /[a-zA-Z]/
    if (myLetter === "") {
        return "Please enter a single letter";
    } else if (myLetter.length > 1) {
        return "Please enter only one letter";
        // use of the bang operator below "!"
    } else if (!myLetter.match(acceptedLetter)) {
        return "Please enter a letter A-Z";
    } else {
        makeGuess(myLetter);
    }
}

const makeGuess = letter => {
    const letterUpperCase = letter.toUpperCase();
    // check to see if letter already in array using includes
    if (letterUpperCase !== lettersNotInWord.includes(letterUpperCase)) {
        lettersNotInWord.push(letterUpperCase);
    }
    console.log(lettersNotInWord)
    return lettersNotInWord
}