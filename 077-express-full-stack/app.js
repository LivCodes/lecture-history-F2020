const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();
const usersRouter = require('./routes/usersRouter')
const petsRouter = require('./routes/petsRouter')

// Set the view engine to EJS so we can render files in /views
app.set('view engine', 'ejs');

// Allows us to serve static files in the public folder
app.use(express.static('public'))

// Allows us to accept form requests and AJAX requests
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Logging middleware
app.use("/", (req, res, next) => {
  console.log(req.method, req.path);
  next();
})

app.get('/', (req, res) => {
    res.redirect('/users')
})

// POST /tasks => create a new task

app.use('/users', usersRouter)
app.use('/pets', petsRouter)


//app.use('/api', apiRouter)

app.listen(PORT, () => {console.log(`Server starting on port ${PORT}`)});