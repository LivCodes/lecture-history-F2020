const fs = require('fs')
const rg = require('./randomGreeting')
const superheroes = require('superheroes');
const supervillains = require('supervillains');

let string = `${superheroes.random()} is fighting ${supervillains.random()}`
console.log(string)

const {randomGreeting} = require('./randomGreeting')
// console.log(rg)

let fileContent = fs.readFile("test.txt", (err, data)=>{
  // console.log(data)
})

fs.writeFile("test.txt", string, (error) => {
  if(error){
    console.log("Error, couldn't write to file")
  } else {
    console.log("Successfully wrote to file")
  }
})
