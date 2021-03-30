const express = require('express');
const PORT = process.env.PORT || 8000;
const usersRouter = require('./routes/usersRouter')
const likesRouter = require('./routes/likesRouter')
const tweetsRouter = require('./routes/tweetsRouter')

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Logging middleware
app.use("/", (req, res, next) => {
  console.log(req.method, req.path);
  next();
})

app.use("/users", usersRouter)
app.use("/tweets", tweetsRouter)
app.use("/likes", likesRouter)

app.listen(PORT, () => {console.log(`Server starting on port ${PORT}`)});