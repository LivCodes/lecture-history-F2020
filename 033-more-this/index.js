// 'use strict'

let maya = {
  firstName: "Maya",
  lastName: "Battacharjee",
  callMe: function (){
    this.fullName = this.firstName + " " + this.lastName
  }
}


maya.callMe()

function hi(){
  console.log(this)
}

hi()






// var firstName = "Bob-Window"

// let ann = {
//   firstName: "Ann",
//   lastName: "Duong",
//   greet: greet
// }

// //once I greet someone, I want to set a fullName property
// //GOAL: Print: Hi, I am Ann Duong
// function greet(){
//   debugger //this -> ann
//   const setFullName = () => {
//     debugger //this -> ann
//     this.fullName = `${this.firstName} ${this.lastName}`
//   }
//   setFullName();
//   console.log(`Hi, I am ${this.fullName}`)  
// }

// ann.greet()

// //has the value of this binded to our alex object
// let thingy = greet.bind(alex);