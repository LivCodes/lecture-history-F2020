function deleteExample(gistID){
  let options = {
    method: "DELETE",
    headers: {
      "accept" : "application/vnd.github.v3+json",
      "Authorization" : `token ${APIKEYS.github}`
    } 
  }
  fetch(`https://api.github.com/gists/${gistID}`, options)
}

function postExample(dataBody){
  // var dataBody = {files: {"helloworld.js" : {content : "fjeioajofijes"}}}

  var options = {
    method: "POST",
    headers : {
      "accept": "application/vnd.github.v3+json",
      "Authorization" : `token ${APIKEYS.github}`
    },
    body: JSON.stringify(dataBody) //send info to server
  }

  fetch('https://api.github.com/gists', options)
  .then(res => {
    if(res.ok){
      return res.json()
    }else{
      throw new Error("Error in the reponse")
    }
  }).then(data => {
    console.log(data)
    addGistToDOM(data)
  })
  .catch(err => {
    alert(err)
  })

}

function addGistToDOM(gist){
  //append the gist to the DOM body
  let a = document.createElement("a")
    let div = document.createElement("div")
    document.body.append(div);
    div.append(a)
    a.innerText = gist.html_url;
    a.href = gist.html_url;
    a.target = "_blank"
}

//I make a GET request to Github, 
function fetchGists(){
  let options = {
    method: "GET",
    headers : {
      "Authorization" : `token ${APIKEYS.github}`
    }
  }
  fetch('https://api.github.com/gists', options)
  .then(res => res.json())
  .then(data => {
    processGists(data)
  })
}

//When the page has loaded, 
document.addEventListener("DOMContentLoaded", () => {
  fetchGists()
})

//showing all MY gists titles
function processGists(gists){
  gists.forEach(gist => {
    addGistToDOM(gist)
  })
}