const Pet = require('../models/Pet')

const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.getAllPets()
    res.status(200).json(pets)
  }catch{
    res.sendStatus(500)
  }
}

const getPet = async (req, res) => {
  const pet_id = req.params.id;
  try {
    const pet = await Pet.getPet(pet_id)
    res.status(200).json(pet)
  } catch {
    res.sendStatus(500)
  }
}

const createPet = async (req, res) => {
  const {pet_name, species, age, user_id} = req.body;
  try {
    if(pet_name && species && age && user_id){
      const pet = await Pet.createPet(pet_name, species, age, user_id)
      res.status(201).json(pet)
    } else {
      res.status(400).json({message: "Bad request. Check the body."})
    }
  } catch {
    res.sendStatus(500)
  }
}

const updatePet = async (req, res) => {
  const pet_id = req.params.id;
  try {
    let pet = await Pet.getPet(pet_id)
    const new_pet = {...pet, ...req.body}
    if(pet){
      pet = await Pet.updatePet(new_pet, pet_id)
      pet = await Pet.getPet(pet_id)
      res.status(200).json(pet)
    }
  } catch {
    res.sendStatus(500)
  }
}

const deletePet = async (req, res) => {
  const pet_id = req.params.id;
  try {
    const pet = await Pet.getPet(pet_id)
    if(pet){
      await Pet.deletePet(pet_id)
      res.sendStatus(204)
    }
  } catch {
    res.sendStatus(500)
  }
}

module.exports = {
  getAllPets,
  getPet,
  createPet,
  updatePet,
  deletePet
}