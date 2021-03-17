//use express
const express = require("express");
// const bodyParser = require('body-parser')

const app = express();
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: false }))

const PORT = 8000;

app.get("/", (req, res) => {
  res.status(200)
  // debugger
  console.log(__dirname)
  res.sendFile(__dirname + "/views/home.html")
})

app.get("/calculator", (req, res) => {
  res.status(200)
  res.sendFile(__dirname + "/views/form.html")
})

//submitting the form will send a POST to /add
//res with the mathematical answer
app.post("/add", (req, res) => {
  res.status(202)
  res.send(`Answer is: ${parseInt(req.body.num1) + parseInt(req.body.num2)}`)
})

app.get("/about", (req, res) => {
  res.status(200)
  res.send("<h1>Marcy Lab is Awesome</h1>")
})

app.get("/json", (req, res) => {
  res.status(200)
  res.send({name: "The Marcy Lab School"})
})

// app.post("/", (req, res) => {
//   res.status(418)
//   res.send("Thank you")
// })

app.listen(PORT, () => {console.log(`Server is running on ${PORT}`)})