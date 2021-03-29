const express = require('express');
const PORT = process.send.PORT || 8000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Logging middleware
app.use("/", (req, res, next) => {
  console.log(req.method, req.path);
  next();
})

app.listen(PORT, () => {console.log(`Server starting on port ${PORT}`)});