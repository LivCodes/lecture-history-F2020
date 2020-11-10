console.log("how do we find bugs and fix them?")

//Finds the sum of all numbers in the array
function findSum(array) { 
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}


//Find the average of all numbers in some array 
  //first I have to 'condense' my array into a single sum
function findAverage(numbersArray){
  let total = findSum(numbersArray);
  let average = total / numbersArray.length
  //we have to divide by the length of the array 
}


let adult;
const age = 20

if(age > 19) {
  debugger;
  adult = true;
} else {
  debugger;
  adult = false;
}

console.log("Are you an adult? ", adult);