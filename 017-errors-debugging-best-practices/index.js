//Problem: If the number is even divisble by 3, return 'Fizz'
//Otherwise, return 'Buzz'.
function fizz(num){
  if (num % 3 === 0) { // 3 % 3 == 0 ? YES!!!
    console.log("we are in the first block")
    return 'Fizz';
  } else {
    console.log("we are in the second block")
    return 'Buzz';
  }
}






// //Problem: Add up all the numbers in an array.

// //take time to understand my resources
// //look at every variable

// function getTotal(numbers){
//     console.log("The value of numbers is", numbers);
//     let runningTotal = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         console.log("The value of i", i);
//         console.log("current array element", numbers[i]);
//         runningTotal = runningTotal + numbers[i]; 
//         console.log("The value of runningTotal", runningTotal);
//     } 
//     return runningTotal;
// }

// //expected results: assumptions
// //actual results

// //increment: adding by 1 every time


// //Findings
// //We want runningTotal => 2, 5, 9
// //What's hapening running Total => 1, 2, 

// //runningTotal = runningTotal + i; 
// //runningTotal += i; 

// //numbers[0] => 2
// //numbers[1] => 3
// //numbers[2] => 4