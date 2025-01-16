
// finding Elements 
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = document.getElementById("guseeingGame");
const checkButton = form.querySelector("#check");
const lostWonMessage = document.createElement("p");
const resultText = cardBody.querySelector(".resultText");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");


let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totallosts = 0;

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    attempts++;
    if (attempts === totalAttempts) {
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }
    if (attempts <= totalAttempts) {
        let guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerHTML = `Remaining Attempts: ${totalAttempts - attempts}`;
    }
});

function checkResult(guessingNumber) {
    const randomNumber = getRandomNumber(5);
    if (guessingNumber === randomNumber) {
        resultText.innerHTML = `You have won!`;
        totalWons++;
    } else {
        resultText.innerHTML = `You have lost: random number was ${randomNumber}`;
        totallosts++;
    }
    lostWonMessage.innerHTML = `Won: ${totalWons}, Lost: ${totallosts}`;
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);
}

function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}