//When the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  //make a fetch request
  fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json() )
        .then(data => {
          //then I manipulate the DOM using the API data
          processDataOntoDOM(data)
        })
})

function processDataOntoDOM(obj){
  let paragraph = document.createElement("p")
  paragraph.innerText = `There are ${obj.number} in space right now!`
  document.body.append(paragraph)
  obj.people.forEach(person => {
    let li = document.createElement("li")
    li.innerText = person.name
    document.body.append(li)
  })
}









































// let p = new Promise((resolve, reject) => {
//   let choices = ["Spaghetti", "Pizza", "Beans"];
//   let choosenDinner;
//   setTimeout(() => {
//     //decide what to eat.
//     choosenDinner = choices[Math.floor(Math.random() * 4)]
//     if(choosenDinner){
//       resolve(choosenDinner)
//     } else {
//       reject("I feel sick. Not gonna eat tonight")
//     }
//   }, 500)
// })
// // console.log(p)
// p.then(promiseResults => {console.log(promiseResults)})
//  .catch(message => {console.warn(message)})