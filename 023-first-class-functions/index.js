function chased(person){
    console.log(`${person} is being chased`);
}

function callMeeting(color){
    console.log(`${color} has called an emergency meeting!`);
}

function eject(color){
    console.log(`${color} has been ejected`);
}

function report(color){
    console.log(`${color}'s body was found`);
}

function swipeCard(color){
    console.log(`${color} is struggling to swipe their card`);
}

//super helper function that can take in
//ANY COLOR
//ANY ACTION 
//Higher order function: a fcunt that takes in a function as a parameter
function somethingHappened(color, action){ //color STRING; action FUNCTION
    // debugger;
    action(color);
}

// let victims = ["Orange", "Orange", "Orange", "Cyan", "Green", "Purple", "Blue", "Brown"];
// let actions = [chased, callMeeting, eject, report, swipeCard, swipeCard, swipeCard, swipeCard];

// for (let i = 0; i < actions.length; i++) {
//     somethingHappened(victims[i], actions[i]);
// }
















// somethingHappened("Orange", chased);
// somethingHappened("Orange", callMeeting);
// somethingHappened("Orange", eject);
// somethingHappened("Cyan", report);
// somethingHappened("Green", swipeCard);


// chased("Orange");
// callMeeting("Orange");
// eject("Orange");
// report("Cyan");
// swipeCard("Green");










// console.log("functions are the best!");

// function myFunc(num){
//     return num * 2;
// }

// const myExpress = function(num){
//     return num * 2;
// }

// //Arrow Functions!!
// //is a type of function expression 
// const myArrow = (num1, num2) => {
//     return num1 * num2;
// }

// function printThing(thing){
//     debugger
//     console.log(thing);
// }




// //Syntactic Sugar
// //Your arrow function only has one parameter 
// const oneParameter = (num) => {
//     return num * 2;
// }

// //Your arrow function only returns something
// //get ride of the block AND the return keyword
// const easyReturn = num => num * 2;

// //CONS: arrow function don't get hoisted, can't access arguments objects, harder to read
// //PROS: shoter, easy to read / write, better abstraction 