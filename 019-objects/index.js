// console.log("It's objects time!");

// let person = { 
//     "crewmate": true, 
//     "color": "red", 
//     "imposter": false,
//     "height": 3,
//     "tasks": ["wires", "scan", "download"],
//     "pet": { "breed": "dog", "color": "blue" }
// };

// for (let key in person) {
    // console.log(key);
    // console.log(person);
    // console.log(` ${key} : ${person[key]} `);
// }

// let keyNames = Object.keys(person);
// ["crewmate", "color", ...]

// for(let i = 0; i < keyNames.length; i++) {
//     let key = keyNames[i] //element in our array
//     // console.log(person);
//     console.log( "The key is:", key );
//     console.log( "The value is:", person[key] ); //person["color"]
// }
//{ key: value }

// Object literal syntax
let reuben = {
  color: "orange",
  role: "crewmate",
  sus: true,
  tasks: ["insert keys", "swipe card"],
  key: "at dropship"
};

let maya = {}

//"copying" objects; be careful of pass by reference
Object.assign(maya, reuben)














// let fun = function(){
//     return "hi";
// }

// let crewmates = {
//     members: ["Ann", "Maya", "Reuben"],
//     otherProperties: "something"
// };

// let imposters = {
//     "0" : "Ricardo",
//     "1" : "Shemar",
//     "2" : "Itzel",
//     "status" : "winners"
// }


//function => stand alone


//method => BELONG to an object
//array.push()
//Math.random()






//for (something in someObject)
// for (const key in reuben) {
//     console.log(`${key} has a value of ${reuben[key]}`);
// }






/*
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
*/














//