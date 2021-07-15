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
    console.log(myLetter)
})