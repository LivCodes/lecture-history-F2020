


let numbers = [1, 2, 3]

function plusFive(num){
    return num + 5;
}

const doubleMe = (x) => {return x * 2;}

const makeNegative = a => -a;

function map(array, func){
    let newArray = [];
    // returns a new array
    for (let i = 0; i < array.length; i++){
        let transformedElement = func(array[i]);
        newArray.push(transformedElement)
        // Every element in the new array is tranformed 
        // using the original element and the function 
    }
    return newArray
}

let mappedArray = numbers.map( x => x - 10 );

//filter: returns new array that is filtered from the original array 
//map:    returns new array where each element is transformed from the original array 
//  [1, 2, 3] => [-1, -2, -3]
//  [1, 2, 3] => [3]


// console.log( map(numbers, makeNegative) );
// //returns [6, 7, 8] or [2, 4, 6]
















// function callMeeting(color){
//     console.log(`${color} has called an emergency meeting!`);
// }

// function eject(color){
//     console.log(`${color} has been ejected`);
// }

// function swipeCard(color){
//     console.log(`${color} is struggling to swipe their card`);
// }

// //Higher Order
// function somethingHappened(color, action){ //color STRING; action FUNCTION
//     action(color);
// }

// somethingHappened("Orange", callMeeting);
// somethingHappened("Red", eject);
