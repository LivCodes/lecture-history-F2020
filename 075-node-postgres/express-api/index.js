const express = require("express");
const app = express();
const {pool} = require('./db/db')
const User = require('./models/User')
const userController = require('./controllers/user')

const PORT = process.env.PORT || 8000; 

app.listen(PORT, () => {console.log(`Server is running on ${PORT}`)})

app.use(express.urlencoded({extended: false})) //allows form requests
app.use(express.json())                        //allows json requests
app.set('view engine', 'ejs');


app.get('/', userController.homePage)
app.get('/users', userController.getUsers)
app.post('/users', userController.createUser)
app.use(['/users/:id'], userController.findUser)
app.get('/users/:id', userController.getUser)
app.patch('/users/:id', userController.updateUser)
app.delete('/users/:id', userController.deleteUser)

//app for tasks

//app for pets