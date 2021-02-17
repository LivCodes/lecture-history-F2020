// 1st step is when the button is clicked 
document.querySelector("button").addEventListener("click", makeRequest)

//2nd step is make a request to the API URL: https://rickandmortyapi.com/api/character
function makeRequest(){
  let request = new XMLHttpRequest()
  request.open('GET', 'https://rickandmortyapi.com/api/character')
  request.send()
  request.addEventListener("readystatechange", showCharacters)
  //request.onload = callback()
}

//3rd take the data and put it in the DOM
function showCharacters(e){
  let request = e.target;
  if(request.readyState === 4){
    let object = JSON.parse(request.response)
    object.results.forEach(person => {
      let li = document.createElement("li")
      li.innerText = person.name
      document.querySelector("ul").append(li)
    })
  }
}