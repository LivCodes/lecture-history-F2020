//file is a bunch functions that handle req, res

const User = require("../models/User");

const homePage = (req, res) => { 
  User.getUsers()
    .then(users => {
      res.status(200).render('home', {users}); 
    }).catch(err => {
      res.status(500).send()
    })
}

const getUsers = (req, res)=>{
  User.getUsers()
    .then(users => {
      res.status(200).json(users)
    }).catch(err => {
      res.status(500).send()
    })
}

const createUser = (req, res) => {
  const {name, email} = req.body
  User.createUser(name, email)
    .then(person => {
      res.status(201).json(person)
    }).catch(err => {
      res.status(500).send()
    })
}

const findUser = (req, res, next) => {
  const id = req.params.id
  User.getUser(id)
    .then(person => {
      if(person){
        req.person = person
        req.id = id
        next()
      } else {
        res.status(404).json({message: "User not found"})
      }
    }).catch(err => {
      res.status(500).send()
    })
}

const getUser = (req, res) => {
  res.status(200).json(req.person)
}

const updateUser = (req, res) => {
  //use regex to check the email is properly formatted
  //res with 400 if email is bad
  let newObj = Object.assign(req.person, req.body) 
  User.updateUser(req.id, newObj)
    .then(person => {
      res.status(200).json(person)
    }).catch(err => {
      res.status(500).send()
    })
}

const deleteUser = (req, res) => {
  User.deleteUser(req.id)
    .then(() => {
      res.status(204).send()
    }).catch(err => {
      res.status(500).send()
    })
}

module.exports = {
  homePage, 
  getUsers,
  createUser,
  findUser,
  getUser,
  updateUser,
  deleteUser
} 