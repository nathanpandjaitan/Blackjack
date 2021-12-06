let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ''

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
    name: "Nathan",
    chips: 200
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  // if 1     -> return 11
  // if 11-13 -> return 10

    let randomCard = Math.floor(Math.random() * 12) + 1;
    if (randomCard > 10) {
        return 10;
    } else if (randomCard === 1) {
        return 11;
    } else {
        return randomCard;
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
    //render out firstCard and secondCard
    cardsEl.textContent = 'Cards: ' 
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = 'Sum: ' + sum

    if(sum <= 20) {
        message = 'Do you want to draw a new card? '
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackjack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }  
    messageEl.textContent = message
}


function newCard() {

    if (isAlive === true && hasBlackjack === false) {
    let newCards = getRandomCard();
    sum += newCards;
    cards.push(newCards);
    renderGame();
    }
}

