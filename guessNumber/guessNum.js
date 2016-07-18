var numToGuess = Math.floor(Math.random()*100 + 1);
console.log(numToGuess);


function yourGuess() {
    guess = document.getElementById("guess").value;
    guesses = document.getElementById("output");

    if (guess == numToGuess) {
        guesses.value = guesses.value + "\r" + "You have guessed correctly! ("+guess+")";
    } else if (guess > numToGuess) {
        guesses.value = guesses.value + "\r" + "You're guessing too high!("+guess+")";
    } else {
        guesses.value = guesses.value + "\r" + "You're guessing too low!("+guess+")";
    }
}

    
