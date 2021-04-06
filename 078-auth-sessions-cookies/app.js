const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// Our database
const db = require("./db");
// templating engine
app.set("view engine", "ejs");
// process forms data
app.use(express.urlencoded({ extended: true }));
// Using bcrypt for secured password encryptions
const bcrypt = require('bcrypt');
const session = require('express-session')

//create all of our sessions here
//stored in memory
app.use(session({
  secret: 'fhe8anfh98',
  resave: false,
  saveUninitialized: false,
  name: "annwebsite"
}))

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/home", (req, res) => {
  const {user} = req.session;
  if(user) {
    res.render("home", {user})
  } else {
    res.redirect("/login")
  }
});

app.post("/register", (req, res) => {
  const {name, email, password} = req.body
  bcrypt.hash(password, 10, (error, hash) => {
    if(error){
      res.render("error", {error})
    } else {
      const queryText = "INSERT INTO users (name, email, encrypted_password) VALUES ($1, $2, $3) RETURNING name, email;"
      db.query(queryText, [name, email, hash])
        .then(results => results.rows[0])
        .then(user => {
          //user is succesfully created and saved to DB
          req.session.user = user 
          res.redirect("/home")
        }).catch(err => res.render("error", error))
    }
  })
})

app.post('/login', (req, res) => {
  const {email, password} = req.body
  //compare the email to the email
  db.query("SELECT * FROM users WHERE email = $1", [email])
    .then(results => results.rows[0])
    .then(user => {
      if(user){
        bcrypt.compare(password, user.encrypted_password, (err, results) => {
          if (results) {
            // the email exists in the db
            // the password was a match
            req.session.user = user
            res.redirect('/home')
          } else {
            throw new Error("Invalid credentials")
          }
        })
      } else {
        throw new Error("Invalid credentials")
      }
    }).catch(err => {
      res.render("login", {message: err.message})
    })
})

app.get('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/login')
})

app.get("*", (req, res) => {
  res.render("error");
});



app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));



// app.post("/login", (req, res) => {
//   req.session.user = {name: "Me"}
//   res.redirect("/home")
// })

// app.get("/login", (req, res) => {
//   const {user} = req.session
//   if(user){
//     res.redirect('/home')
//   } else {
//     res.render("login")
//   }
// })

// app.get('/home', (req, res) => {
//   const {user} = req.session
//   if(user){
//     res.render("home", {user})
//   } else {
//     res.redirect('/login')
//   }
// })

