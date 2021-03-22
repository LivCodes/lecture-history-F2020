const express = require('express')
const app = express()
var methodOverride = require('method-override')
const PORT = process.env.PORT || 3001
//app.use("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)})

app.use((req, res, next) => {
  console.log(req.method, req.url, new Date())
  next()
})

app.use("/tasks/:id/", (req, res, next)=> {
  let foundTask = tasks.find(task => task.id === parseInt(req.params.id))
  if(foundTask || req.params.id === "new"){
    req.foundTask = foundTask
    next()
  } else {
    res.render("notfound.ejs", {title: "Not Found"})
  }
})

let taskCount = 0
let tasks = [{id: ++taskCount, title: "Walk dog", description: "hi", done: true}, {id: ++taskCount, title: "Eat", description: "hey", done: false}]

//*********** ROUTES ****************/

app.get('/', (req, res) => {
  res.render("home.ejs", {title: "To Do List", tasks})
})

app.get('/tasks', (req, res) => {
  res.redirect('/')
})

app.get('/tasks/new', (req, res) => {
  res.render("addform.ejs", {title: "Add Task"})
})

app.post('/tasks', (req, res) => {
  let {title, description} = req.body;
  const newTask = {id: ++taskCount, title, description, done: false};
  tasks.push(newTask)
  res.redirect("/")
})

app.get('/tasks/:id', (req, res) => {
  res.render("task.ejs", {title: `${req.foundTask.title}`, task: req.foundTask})
})

app.get('/tasks/:id/edit', (req, res) => {
  res.render("editform.ejs", {title: `Edit ${req.foundTask.title}`, task: req.foundTask})
})

app.put('/tasks/:id', (req, res) => {
  let {title, description} = req.body;
  req.foundTask.title = title;
  req.foundTask.description = description;
  res.redirect(`/tasks/${req.params.id}`)
})

app.patch("/tasks/:id", (req, res) => {
  req.foundTask.done = !req.foundTask.done 
  res.redirect(`/tasks/${req.params.id}`)
})

app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(task => task.id != req.params.id)
  res.redirect("/")
})

app.get("*", (req, res) => {
  res.render("notfound.ejs", {title: "Not Found"})
})