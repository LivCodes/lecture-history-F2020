
function counterCreator(noun){
  let id = 1; //NOT globally scoped

  return function (){
    console.log(`${id} ${noun}`); //is access here
    id += 1;
  }
}

//returning a function
let annsCounter = counterCreator("bird");


// return another copy of that function 
let reubensCounter = counterCreator("pony");


//return a third copy of that function
let mayaCounter = counterCreator("dog");
















/*
createNextId = function (studentName){
   console.log(`Hello, ${studentName}. Your ID is ${id}`);
   id += 1;
}
*/


