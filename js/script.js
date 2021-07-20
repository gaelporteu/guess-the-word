const lettersGuessed = document.querySelector(".guessed-letters");
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

const guessedLetters = [];

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
    if (guessedLetters.includes(letterUpperCase)) {
        console.log("You've already guessed that letter silly!")
        return "You've already guessed that letter silly!"
    } else {
        guessedLetters.push(letterUpperCase);
        showGuessedLetters(guessedLetters);
        updateWordInProgress(guessedLetters);
    }
}

const showGuessedLetters = () => {
    lettersGuessed.innerHTML = "";
    // console.log(guessedLetters);

    // iterate over the guessedLetters array to output the li items
    for (let letter of guessedLetters) {
        const listLetters = document.createElement("li");
        listLetters.innerHTML = letter;
        lettersGuessed.append(listLetters);
    }
}

const updateWordInProgress = () => {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    console.log(wordArray)
    const lettersInWord = [];

    for (let letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            lettersInWord.push(letter)
        } else {
            lettersInWord.push("●")
        }
    }
    wordInProgress.innerText = lettersInWord.join("")

    // for (let i = 0; i < wordArray.length; i++) {
    //     for (let j = 0; j < guessedLetters.length; j++) {
    //         if (wordArray[i] === guessedLetters[j]) {
    //             lettersInWord.push(wordArray[i]);
    //         }
    //     }
    // }
    // return lettersInWord;
}

