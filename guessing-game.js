function guessingGame() {
 //need to have a random number and a user should guess that number
    //need to set the random with math method (whole numbers)
    let answer = Math.floor(Math.random() * 100);
    // set to be false so doesn't return won alert
    let done = false;
    //set guesses to 0 so can return how many guesses it took.
    let guesses = 0;

    //return function that will check to see if guesses match the answer
    //function needs to accept a number as a parameter for the persons guess
    return function guess(num) {
        //check if game is done yet or not. if it is then break
        if (done) return 'Game Over, You have already won!';
        guesses++;
        //check if num is equal to answer
        if (num === answer) {
            done = true;
            let guess = guesses === 1 ? 'guess' : 'guesses';
            return `Awesome Job! You have guessed ${num} in ${guesses} ${guess}`;
        }
        if (num < answer) return 'Your number is too low';
        if (num > answer) return 'Number too high';
    };
}

module.exports = { guessingGame };
