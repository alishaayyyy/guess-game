
var randomNumber;
var maxNumber = 10;

function setLevel() {
    var level = document.getElementById('levelSelect').value; 
    if (level === 'easy') {
        maxNumber = 10;
    } else if (level === 'medium') {
        maxNumber = 20;
    } else if (level === 'hard') {
        maxNumber = 50;
    }

    
    randomNumber = Math.floor(Math.random() * maxNumber) + 1;
}

function checkGuess() {
    var guess = document.getElementById('guessInput').value; 
    var feedback = document.getElementById('feedback'); 
    
    if (guess === "") {
        feedback.innerText = "Please enter a number.";
        return;
    }

    if (guess < 1 || guess > maxNumber) {
        var rangeMessage = '';

        if (maxNumber === 10) {
            rangeMessage = '1 and 10';
        } else if (maxNumber === 50) {
            rangeMessage = '1 and 50';
        } else if (maxNumber === 100) {
            rangeMessage = '1 and 100';
        }

        feedback.innerText = "Please enter a valid number between " + rangeMessage + ".";
        return;
    }

   
    if (parseInt(guess) === randomNumber) {
        feedback.innerText = "Congratulations! You guessed the correct number!";
    } else if (parseInt(guess) < randomNumber) {
        feedback.innerText = "Too low! Try again. Guess a number between 1 and " + maxNumber + ".";
    } else {
        feedback.innerText = "Too high! Try again. Guess a number between 1 and " + maxNumber + ".";
    }
}


setLevel();


document.getElementById('levelSelect').addEventListener('change', function() {
    setLevel(); 
})
