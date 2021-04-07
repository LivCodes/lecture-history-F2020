const bcrypt = require("bcrypt")
const User = require("../models/User")
const Auth = require('../models/Auth')

const authenticate = (req, res, next) => {
  //req.params.id => id IN THE URL 
  //req.headers.authentication => token in the headers 
  //conert the token to a user's id 
  //compare the user's id to the params id
  //if the two ids match => next()
  //else => res.sendStatus(401)
}

const createUser = async (req, res) => {
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
}

const getAllUsers = async (req, res) => {
  try {
    let users = await User.getAllUsers()
    res.status(200).json(users)
  } catch {
    res.sendStatus(500)
  }
}

const getUser = async (req, res) => {
  //grab the token from the request
  //if there is not token, send back a 401 unathorized
  const token = req.headers.authentication

  //conver the token back into the user id 
  const tokenID = Auth.decryptToken(token)  
  const user_id = req.params.id;
  debugger
  if(tokenID === parseInt(user_id)){
    try {
      let user = await User.getUser(user_id)
      let pets = await User.getUserPets(user_id)
      user.pets = pets
      res.status(200).json(user)
    } catch {
      res.sendStatus(500)
    }
  } else {
    res.status(401).json({message: "YOU ARE UNAUTHORIZED"})
  }

}

const updateUser = async (req, res) => {
  const user_id = req.params.id;
  try {
    let user = await User.getUser(user_id)
    let updatedUser = {...user, ...req.body};
    await User.updateUser(updatedUser) 
    user = await User.getUser(user_id)
    res.status(200).json(user)
  } catch {
    res.sendStatus(500)
  }
}

const deleteUser = async (req, res) => {
  const user_id = req.params.id;
  try {
    let user = await User.getUser(user_id)
    if(user){
      await User.deleteUser(user_id)
      res.sendStatus(204)
    }
  } catch {
    res.sendStatus(500)
  }
}

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  authenticate
}