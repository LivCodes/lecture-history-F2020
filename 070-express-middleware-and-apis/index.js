const express = require("express")
const app = express()
const PORT = 8080

let posts = [
  {
    id: 1,
    name: "GME stocks are soaring",
    content: "hold. we have diamond hands" 
  },
  {
    id: 2,
    name: "Cute puppies and kittens",
    content: "awww" 
  },
  {
    id: 3,
    name: "Coding in 1 year",
    content: "Apply for the Marcy Lab School today!" 
  },
]

app.set("view engine", 'ejs')
app.use(express.static("public"))

app.get("/", (req, res) => {
  let currentTime = new Date()
  res.status(200)
  res.render("home", {title:"Home Page", time: currentTime, posts: posts})
})

app.get("/home", (req, res) => {
  res.redirect("/")
})

app.get("/about", (req, res) => {
  let currentTime = new Date()
  res.status(200)
  res.render("about", {title: "About Page", time: currentTime})
})

app.get("*", (req, res) => {
  res.status(404)
  res.send("Not Found")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})