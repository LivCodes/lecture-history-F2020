// console.log("first line of code")
// console.log("last line of code")
let gifs = [
  "https://media.giphy.com/media/JuiADLPJFtuW5NnW8T/giphy.gif",
  "https://media.giphy.com/media/1hqYk0leUMddBBkAM7/giphy.gif",
  "https://media.giphy.com/media/Hrr0GblXsiE7u/giphy.gif",
  "https://media.giphy.com/media/fCU19BrTFK1RqUay6w/giphy.gif",
  "https://media.giphy.com/media/w4rZ2SFiYTnaM/giphy.gif",
  "https://media.giphy.com/media/1kJxyyCq9ZHXX0GM3a/giphy.gif",
  "https://media.giphy.com/media/ZBL02G9KUEw4ptmrYd/giphy.gif",
  "https://media.giphy.com/media/YP2HqPBbtQVSU2DFKt/giphy.gif",
  "https://media.giphy.com/media/1zJEz2pvqumDlG2Twh/giphy.gif",
  "https://media.giphy.com/media/SggILpMXO7Xt6/giphy.gif"
]

function generateGifs(){
  gifs.forEach(url => {
    //DOM manipulation
    let container = document.querySelector(".gif-container");
    let img = document.createElement("img")
    img.src = url
    container.appendChild(img)
  })
}

function generateGif(){
    if(gifs.length > 0){
      //DOM manipulation
      let container = document.querySelector(".gif-container");
      let img = document.createElement("img")
      img.src = gifs.shift()
      container.appendChild(img)
    } else {
      clearInterval(timer2)
    }


}

// let timer1 = setTimeout(generateGifs, 5000)

function changeColor(){
  let header = document.querySelector("h1");
  header.style.color = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
}

let timer2 = setInterval( generateGif , 1000)

console.log(timer1, timer2)

document.querySelector("button").addEventListener("click", () => {
  clearTimeout(timer1)
  clearInterval(timer2)
  let container = document.querySelector(".gif-container");
  while(container.childElementCount){
    //remove the first child
    container.removeChild(container.children[0])
  }
})