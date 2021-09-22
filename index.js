
let cards = [] // array - ordered list of items
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEL = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");


function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

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
    if (isAlive === true && hasBlackJack === false ) {
    let card = getRandomCard();
    sum += card;
    renderGame();
    cards.push(card);
    }
}



