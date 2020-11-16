//Write a function that takes a string and returns the string reversed.

// function reverseString (string){
//     //convert a string into an array
//     let array = string.split("");
//     let reverseArray = array.reverse();
//     let joinedArray = reverseArray.join("");
//     return joinedArray
// }

// reverseString("hello")

//Write a function that takes an array of numbers and returns a new array containing only the even numbers in the original array.

// function onlyEvens (numbersArray){           //3.    3 % 2 => 1 (true)
//     let filteredArray = numbersArray.filter( num => !(num % 2) );
//     return filteredArray
// }

// onlyEvens([3, 6, 7, 8, 1, 2]) //[6, 8, 2]

//Write a function that takes an array of numbers and returns a new array with the original array elements doubled.

// function double(numbers){
//     let mappedArray = numbers.map( num => num * 2 );
//     console.log(mappedArray);
//     //use .map()
//     //return the original array elements doubled
// }

// double([3, 2, 1]) // => [6, 4, 2]


//Return the first three elements of an array.
function firstThree(array){
    //for loop
    //slice
    //destructure

    // let [firstEl, secEl, thirdEl] = array;
    // return [firstEl, secEl, thirdEl];

    return array.slice(0, 3)

    // let newArray = []
    // for (let i = 0; i < 3; i++){
    //     newArray.push(array[i])
    // }
    // return newArray;
}

// console.log( firstThree([7, 6, 9, 8]) )// => [7, 6, 9] 

//Insert your name into the following array at index 2.
const fellows = ['carms', 'anne', 'peter', 'cielo'];

function insertName(people, name){
    people.splice(2, 0, name);
}
insertName(fellows, "maya");



//Write a function that takes a string argument and returns a new string with vowels deleted.


//Write a function that takes an array of numbers and determines whether all numbers are even.


//Write a function that takes an array of strings and returns an array with only the words that contain vowels.