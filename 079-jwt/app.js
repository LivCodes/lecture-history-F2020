const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();
const bcrypt = require('bcrypt')
const usersRouter = require('./routes/usersRouter')
const petsRouter = require('./routes/petsRouter')
const User = require("./models/User")

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create a user and store their info and encrypted password in DB
app.post('/users', async (req, res) => {
  const {name, email, password} = req.body;
  try {
    if (name && email && password){
      const saltRounds = 10;
      const encrypted_password = await bcrypt.hash(password, saltRounds);
      const user = await User.createUser(name, email, encrypted_password)
      res.status(201).json(user)
    } else {
      res.status(400).json({message: "Bad request. Check the body."})
    }
  } catch {
    res.sendStatus(500)
  }
})

// Checks a request to make sure the email and passwords match
app.post('/login', async (req, res) => {
  const {email, password} = req.body;
  const user = await User.getUserByEmail(email);
  if(user){
    //match is a boolean of whether the password match
    const match = await bcrypt.compare(password, user.encrypted_password);
    if(match){
      res.json({message: "These are the correct credentials."})
    } else {
      res.status(401).json({message: "These invalid credentials."})
    }
  } else {
    res.status(401).json({message: "These invalid credentials."})
  }
})

app.use('/users', usersRouter)
app.use('/pets', petsRouter)

app.listen(PORT, () => {console.log(`Server starting on port ${PORT}`)});