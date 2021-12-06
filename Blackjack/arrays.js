// // // //array of unordered list



// let mySkills = [
//     'frontend enginner',
//     'backend enginner',
//     'fullstack developer']

// console.log(mySkills[1])

// // // let experience = ['CEO at Scrimba', 'Frontend developer at Xeneta', 'People counter for Norstat'];

// // // console.log(experience[1])
// // // console.log(experience[2]);
// // // console.log(experience[0]);


// // let mySelf = ["Nathan anandalla P", 11, true]

// // Push an array 

// // let message = [
// //     "Hey, how's it going?",
// //     "i'm great, thank you! How about you?",
// //     "All good. Been working on my portfolio lately."
// // ]

// // let newMessage = "Same here!"

// // message.push(newMessage)

// // message.pop();


// // console.log(message)

// // Counting in JavaScript FOR LOOP


//         //start     finish      step size
// // for (let count = 10; count < 21; count += 1 ) {
// //     console.log(count)
// // }

// // for ( let i = 0; i < 6; i += 1) {
// //     console.log(i)
// // }  

// // for (let i = 10; i < 101; i+= 10) {
// //     console.log(i)
// // }



// // FOR LOOPS MESSAGES


// // let message = [
// //     "Hey, how's it going?",
// //     "i'm great, thank you! How about you?",
// //     "All good. Been working on my portfolio lately.",
// //     "Same here!",
// //     "Great to hear.",
// //     ";)",
// //     "hahahahaha"
// // ]

// // //DRY Don't repeat yourself
// // // console.log(message[0])
// // // console.log(message[1]);
// // // console.log(message[2]);
// // // console.log(message[3]);

// // for ( let i = 0; i < message.length; i += 1) {
// //     console.log(message[i])
// // }

// // //message.length biar gausah ganti ganti nominal < dari lagi jika ada tambahan array


// // let cards = [7, 3, 9]

// // for (let i = 0; i < cards.length; i++) {
// //     console.log(cards[i])
// // }

// // challange 

// // let sentence = ['Hello ', 'my ', 'name ', 'is ', 'Per'];
// // let greetingEl = document.getElementById('greeting-el');

// // // Render the sentence in the greetingEl paragraph using a for loop and .textContent

// // for (let i = 0; i < sentence.length; i++) {
// //     greetingEl.textContent += sentence[i];
// // }


// // RETURNING VALUES IN FUNCTION

// let player1Time = 102
// let player2Time = 107

// // cmd+d - ctrl+d
// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// // let fastestRace = getFastestRaceTime()
// // console.log(fastestRace)

// // Write a function that returns the total race time
// // Call/invoke the function and store the returned value in a new variable
// // Finally, log the variable out

// function totalRaceTime() {
    
//     return player1Time + player2Time
// }

// let total = totalRaceTime()
// console.log(total)

// RANDOM NUMBER

// let random = Math.random() * 6

// console.log(random)

// // from 0.000
// // to 5.999


// let flooredNumber = Math.floor(3.45632) 

// console.log(flooredNumber)

// // it removes the decimals

// let randomNumber = Math.floor (Math.random() * 6)

// console.log(randomNumber)

// // show 0, 1, 2, 3, 4, 5

// let randomNumber = Math.floor (Math.random() * 6) + 1

// console.log(randomNumber)

// // show 1, 2, 3, 4, 5, 6


// Create a function, rollDice(), that returns a random number between 1 and 6

// function rollDice() {
//     let randomNumber = Math.floor(Math.random() * 6) + 1;
//     return randomNumber
// }

// console.log(rollDice())


// Logical Operator

/*
let win = true
let certificate = true 


if (win && certificate) { //gaperlu masukin value true karena menggunakan Truthy & Falsy 
    showReport()
}

function showReport() {
    console.log("You win a prize!")
}
*/

// OR Operator

// let likesDocumentaries = true
// let likesStartups = false

// if (likesDocumentaries === true || likesStartups === true) {
//     recommendMovie()
// }

// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like!")
// }


