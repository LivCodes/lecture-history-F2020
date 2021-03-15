function randomGreeting(names = ["Ann", "Erwins"]){
  let randomIndex = Math.floor(Math.random() * names.length);
  return `hello, ${names[randomIndex]}!`
}

function randomDigit(){
  let digits = "0123456789"
  return digits[Math.floor(Math.random() * 10)]
}

//module.exports by default {}
module.exports = {
  randomGreeting, //syntactic sugar
  randomDigit,
  age: 19
}