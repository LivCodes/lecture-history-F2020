//how does a computer run code

function Teacher(firstName = "Someone", role = "Something"){ //construct objects
  this.name = firstName;
  this.job = role;
  this.sleep = function(){
    return `${this.name} is sleeping`
  }
} 

Teacher.prototype.greet = function(){
    return `I am ${this.name}`
}
//Teacher is a function
//property called .prototype

Teacher.prototype.teach = function(){
  return `${this.name} is teaching`
}


let ann = new Teacher("Ann", "Instructor")
let reuben = new Teacher("Reuben", "Director")
let maya = new Teacher("Maya", "Program Officer")

//ann is an instance of Teacher
//reuben is an instance of Teacher
//maya is an instance of Teacher
let foods = ["banana", "apple"]

Array.prototype.eat = function(){
  return "This array is hungry."
}

Array.prototype.annouceFirstElement = function(){
  console.log(`${this[0]} is my first element!`)
}

Object.prototype.sleep = function(){
  return `I am sleepy`;
}





























// function personFactory(firstName, role){
  // return {
  //   name: firstName, 
  //   job: role,
  //   greet: function(){
  //     return `I am ${this.name}`
  //   }
  // }
// }

// let ann = personFactory("Ann", "Instructor");
// let reuben = personFactory("Reuben", "Director");
// let maya = personFactory("Maya", "Program Officer");
