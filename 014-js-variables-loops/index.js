// console.log("What's up, Maya");

// let day = "Monday";

// let time;

//3 ways to declare a variable 
//var will allow you to redeclare variables, AND you can reassign variables

var person = "Reuben";

var person = "Maya";

var person = "Ann";

person = "Olivia";

person = "Alex";

// console.log(person);

//let, you CANNOT redeclare, but you CAN reassign

let day = "Monday";

day = "Tuesday";

day = "Wednesday";

// console.log(day);


//const 
//const CANNOT redeclare a variable; you can't reassign it either; 

// const mood = "happy";

// // mood = "sad";

// console.log(mood);



// const rate = 0.012

// rate + 1

// console.log(rate)





//Scope

// var fellow = "Shemar";

// if (2 > 1) { //WILL RUN THIS BLOCK
//     var fellow = "Andrea";
//     console.log("inside if block", fellow);
// }

// console.log("outside if block", fellow);


//LOOPS
//while, do...while, for


//declare using let named `counter` and initlaize to 1
let counter = 1;
while ( counter < 10 ) {
    // console.log(counter)
    counter += 2;
}


let x = 1
do {
    // console.log(x);
    x += 1;
    // console.log("at the end", x)
} while (x < 0)



//condition, what your code does 
for (let i = 1; i < 10; i++) {
    console.log(i)
    if( i % 4 === 0 ) {//is is divisble by 4
        console.log("OH NO! I found a nuber divisbile by 4");
        break;
    }
} 
console.log("Ann")
















