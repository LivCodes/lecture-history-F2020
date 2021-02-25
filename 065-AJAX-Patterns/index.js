class FetchRequest {
  constructor(url, options){
    this.url = url 
    this.options = options
  }

  makeFetch(){
    return fetch(this.url, this.options)
    .then(res => {
      if(res.ok){
        return res.json()
      } else {
        alert("ERROR!!!!")
      }
    })
  }
  
}

let BASE_URL = "https://api.github.com";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#token-form").addEventListener("submit", handleTokenForm)
  document.querySelector("#get-repos").addEventListener("click", fetchRepos)
  document.querySelector("#make-repo-form").addEventListener("submit", handleCreateRepo)
  document.querySelector("#delete-repo-form").addEventListener("submit", handleDeleteRepo)
})

function handleDeleteRepo(e){
  e.preventDefault();
  let repoName = e.target[0].value;
  let options = {
    method: "DELETE",
    headers: {"Authorization" : `token ${getToken()}`}
  }

  let deleteFetch = new FetchRequest(`https://api.github.com/repos/${getUserName()}/${repoName}`, options)
  deleteFetch.makeFetch()

  let li = document.querySelector(`#${repoName}`)
  li.remove()

}

function handleCreateRepo(event){
  event.preventDefault()
  let name = event.target[0].value
  let description = event.target[1].value 
  postFetch(name, description)
}

function postFetch(n, d){
  let options = { 
    method: "POST",
    headers: {"Authorization" : `token ${getToken()}`},
    body: JSON.stringify({name: n, description: d})
  }
  let postRequest = new FetchRequest(`https://api.github.com/user/repos`, options)
  postRequest.makeFetch()

  .then(repo => {
      //DOM Manipulation
      let li = document.createElement("li")
      li.innerText = repo.name
      li.id = repo.name
      document.querySelector("ul").prepend(li)
      document.querySelector("#make-repo-form").reset()
    console.log("I have gotten my response back")
  })
}

//*********************************************** */


function getToken(){
  return document.querySelector("#token")? document.querySelector("#token").innerText : null
}

function getUserName(){
  return document.querySelector("#username")? document.querySelector("#username").innerText : null
}

function fetchRepos(){
  let getRequest = new FetchRequest(`https://api.github.com/users/${getUserName()}/repos?sort=created`)
  getRequest.makeFetch()
    .then(reposArray => {
        reposArray.forEach(repo => {
            addRepoToUl(repo, document.querySelector("ul"))
        })
    })
}

function addRepoToUl(repo_data, ulElement, addToBottom = true){
  let li = document.createElement("li")
  li.innerText = repo_data.name
  li.id = repo_data.name
  if(addToBottom){
    ulElement.append(li)
  } else {
    ulElement.prepend(li)
  }
}

function handleTokenForm(e){
  e.preventDefault()
  let token = document.querySelector("#token-input").value;
  fetchUserData(token)
}

function fetchUserData(token){
  let options = {
    headers : {
      "Authorization" : `token ${token}`
    }
  }
  fetch(`${BASE_URL}/user`, options)
  .then(res => res.json())
  .then(data => {
    showUserData(data, token)
  })
}

function showUserData(userData, token){
  document.querySelector("#token-form").remove()
  document.querySelector("#options").style.display = "block"
  document.querySelector("#container").innerHTML = `
    <p>Token: <span id="token">${token}</span></p>
    <p><b>Hello, <span id="username">${userData.login}</span></b></p>
  `
}
