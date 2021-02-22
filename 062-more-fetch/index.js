//3 pillars of frontend webdev 
//when the news form is submitted, then fetch to the News API, then manipulate the #news-div

document.addEventListener("DOMContentLoaded", () => {
  let gifsForm = document.querySelector("#giphy-form")
  gifsForm.addEventListener("submit", handleGifForm);
  let newsForm = document.querySelector("#news-form")
  newsForm.addEventListener("submit", handleNewsForm)
})

//When the news form is submitted
function handleNewsForm(event){
  event.preventDefault()
  let query = document.querySelector("#news-input").value
  fetchNews(query)
  .then(data => displayArticles(data.articles))
}

//make a fetch call to NEWS API
async function fetchNews(search){
  let optionsObject = {
    method: "GET",
    headers: {
      "Authorization" : APIKEYS.news
    }
  }
  let res = await fetch(`https://newsapi.org/v2/everything?q=${search}`, optionsObject)
  let data = await res.json()
  return data
}

//add these articles to the DOM 
function displayArticles(articles){
  articles.forEach(article => {
    let a = document.createElement("a")
    a.href = article.url
    a.target = "_blank"
    let p = document.createElement("p")
    p.innerText = `${article.title} by ${article.author}`
    a.append(p)
    document.querySelector("#news-div").append(a)
  })
}

//When the giphy form is submitted, 
function handleGifForm(event){
  event.preventDefault()
  let searchTerm = event.target[0].value
  fetchGifs(searchTerm)
  .then(data => processGifs(data))
}

//fetch to the GIPHY API, 
async function fetchGifs(searchTerm){
  let res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEYS.giphy}&q=${searchTerm}&limit=3&rating=g`)
  let data = await res.json()
  return data
}

//add <img> to our #giphy-div
function processGifs(obj){
  let imageTags = obj.data.map(gif => `<img src="${gif.images.original.url}" width="200px"/>`).join("\n")
  document.querySelector("#giphy-div").innerHTML = imageTags
}