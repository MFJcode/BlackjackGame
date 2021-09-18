
let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard] // array - ordered list of items
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEL = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame() {
    renderGame()
}

function  renderGame() {
    sumEl.textContent = "Sum:" +" "+ sum;
    cardsEl.textContent = "Cards:" +" "+ cards[0] + " " + cards[1];
    if (sum <= 20) {        
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEL.textContent = message;
}

function newCard() {
    let card = 4
    sum += card
    renderGame()
    cards.push(card);
}



