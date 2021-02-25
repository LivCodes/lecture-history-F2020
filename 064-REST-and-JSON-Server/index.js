function postMonster(name, age, description){
  let options = {
    method: "POST", 
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify({name, age, description})
  }
  fetch('http://localhost:3000/monsters', options)
  .then(res => res.json())
  .then(newMonster => {
    addMonsterToDOM(newMonster)
  })
}


//When the page has loaded, 
document.addEventListener("DOMContentLoaded", () => {
  fetchMonsters()
})

//I want to make a GET fetch to /monsters, 
function fetchMonsters(){
  fetch('http://localhost:3000/monsters')
  .then(res => res.json())
  .then(monstersArray => {
    monstersArray.forEach(monster => addMonsterToDOM(monster))
  })
}

//then add each one to the #monsters-container div
function addMonsterToDOM(mon){
  //add this single monster to the DOM
  console.log(mon)
  let monsterElement = document.createElement("div")
  monsterElement.style.border = "2px solid black"
  monsterElement.innerText = `${mon.name} (${mon.age})`
  let p = document.createElement("p")
  p.innerText = mon.description
  monsterElement.append(p)
  let container = document.querySelector("#monsters-container")
  container.append(monsterElement)
}

// When the form is submitted happens, 
// make a POST fetch to /mosters, 
// and manipulate adding the new monster

// When the delete button is clicked
// make a DELETE fetch to /monsters/id
// manipulate the DOM by remove that monster's div