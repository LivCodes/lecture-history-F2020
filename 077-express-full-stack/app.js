const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();

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
    res.status(200).render('home', {title: 'Home Page'});
})

app.listen(PORT, () => {console.log(`Server starting on port ${PORT}`)});