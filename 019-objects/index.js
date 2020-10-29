// console.log("It's objects time!");

let person = { 
    "crewmate": true, 
    "color": "red", 
    "imposter": false,
    "height": 3,
    "tasks": ["wires", "scan", "download"],
    "pet": { "breed": "dog", "color": "blue" }
};

for (let key in person) {
    // console.log(key);
    // console.log(person);
    console.log(` ${key} : ${person[key]} `);
}

// let keyNames = Object.keys(person);
// ["crewmate", "color", ...]

// for(let i = 0; i < keyNames.length; i++) {
//     let key = keyNames[i] //element in our array
//     // console.log(person);
//     console.log( "The key is:", key );
//     console.log( "The value is:", person[key] ); //person["color"]
// }
//{ key: value }