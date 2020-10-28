console.log("arrays are awesome!");

function greet(greeting, name, ...other) {
  console.log(`${greeting}, ${name}!`);
  console.log(other[0]); //Bhatta?
  console.log(arguments[0]); //Hey?
}

greet("Hey", "Maya", "Bhatta", 
"Charjee", "Marc", "Antonio");
