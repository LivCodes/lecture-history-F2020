const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.listen(PORT, () => {console.log(`Server is running on ${PORT}`)})

app.get('/', (req, res) => { res.status(200).json({message: "Hello world!"}) })