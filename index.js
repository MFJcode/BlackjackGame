
let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEL = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");

function startGame() {
    if (sum <= 20) {
        sumEl.textContent = "Sum:" +" "+ sum;
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        sumEl.textContent = "Sum:" +" "+ sum;
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        sumEl.textContent = "Sum:" +" "+ sum;
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEL.textContent = message;
}



