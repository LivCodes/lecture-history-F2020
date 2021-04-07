const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();
const bcrypt = require('bcrypt')
const usersRouter = require('./routes/usersRouter')
const petsRouter = require('./routes/petsRouter')
const User = require("./models/User")

// Allows us to accept form requests and AJAX requests
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Logging middleware
app.use("/", (req, res, next) => {
  console.log(req.method, req.path);
  next();
})

app.use('/users', usersRouter)
app.use('/pets', petsRouter)

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

app.listen(PORT, () => {console.log(`Server starting on port ${PORT}`)});