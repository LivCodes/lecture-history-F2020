const User = require("../models/User")
const Pet = require("../models/Pet")

const getAllUsersView = async (req, res) => {
  try {
    let users = await User.getAllUsers()
    res.status(200).render("users", {title: "Users Page", users})
  } catch {
    res.sendStatus(500)
  }
}

const getAllUsersAPI = async (req, res) => {
  try {
    let users = await User.getAllUsers()
    res.status(200).json(users)
  } catch {
    res.sendStatus(500)
  }
}

const getUserAPI = async (req, res) => {
  const user_id = req.params.id;
  try {
    let user = await User.getUser(user_id)
    let pets = await User.getUserPets(user_id)
    user.pets = pets
    res.status(200).json(user)
  } catch {
    res.sendStatus(500)
  }
}

const getUserView = async (req, res) => {
  const user_id = req.params.id;
  try {
    let user = await User.getUser(user_id)
    let pets = await User.getUserPets(user_id)
    user.pets = pets
    res.status(200).render('user_pets', {title: `${user.name}'s Pets`, user})
  } catch {
    res.sendStatus(500)
  }
}

const createNewPet = async (req, res) => {
  let user_id = req.params.id;
  const user = await User.getUser(user_id)
  res.status(200).render('add_form', {title: "Add Pet", user})
}

module.exports = {
  getAllUsersView,
  getAllUsersAPI,
  getUserAPI,
  getUserView,
  createNewPet
}