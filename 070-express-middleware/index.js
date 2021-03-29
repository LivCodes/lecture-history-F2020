const { render } = require("ejs");
const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: false}))

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
  }
];
let postCounter = posts.length;

app.set("view engine", 'ejs');
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log(req.method, req.url)
  next() 
})

app.use(["/", "/about", "/showPost/:id", "/new"],(req, res, next) => {
  let currentTime = new Date();
  req.currentTime = currentTime
  console.log("I am here")
  next()
})

app.use(["/showPost/:postId", "/deletePost/:postId"], (req, res, next) => {
  let postId = req.params.postId
  let foundPost = posts.find(post => post.id == postId)
  if(foundPost){
    req.post = foundPost
    next()
  } else {
    res.redirect("/404")
  }
})

app.get("/showPost/:postId", (req, res) => {
  res.status(200)
  res.render("showPost", {title: req.post.name, time: req.currentTime, post: req.post})
})

app.get("/deletePost/:postId", (req, res) => {
  posts = posts.filter(post => post.id != req.post.id)
  res.redirect("/")
})

app.get("/", (req, res) => {
  res.status(200);
  res.render("home", {title:"Home Page", time: req.currentTime, posts: posts});
});

app.get("/about", (req, res) => {
  res.status(200);
  res.render("about", {title: "About Page", time: req.currentTime}); 
});

app.delete("/deletePost/:postId", (req, res) => {
  res.send("This is a REAL delete route")
})

app.get("/new", (req, res) => {
  res.status(200)
  res.render("form", {title: "Add a Post", time: req.currentTime})
})

app.get("/home", (req, res) => {
  res.redirect("/");
});


app.post("/addPost", (req, res) => {
  console.log(req.body)
  let {postTitle, postContent} = req.body
  postCounter++
  let newPost = {name: postTitle, content: postContent, id: postCounter}
  posts.push(newPost)
  res.status(201)
  res.redirect("/")
})

app.get("*", (req, res) => {
  res.status(404);
  res.send("Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});