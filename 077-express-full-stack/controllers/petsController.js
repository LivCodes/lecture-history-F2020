const Pet = require('../models/Pet')

const getAllPetsAPI = async (req, res) => {
  try {
    const pets = await Pet.getAllPets()
    res.status(200).json(pets)
  }catch{
    res.sendStatus(500)
  }
}

const createPet = async (req, res) => {
  const {pet_name, species, age, user_id} = req.body;
  if(pet_name && species && age && user_id){
    //communicate with my db
    let newPet = await Pet.createPet(pet_name, species, age, user_id)
    res.status(201).json(newPet)
  } else {
    res.status(400).json({message: "missing body parameters"})
  }
}

const updatePet = async (req, res) => {
  const {pet_name, species, age, user_id} = req.body;
  if(pet_name && species && age && user_id){
    //communicate with my db
    res.status(201).json("updated pet")
  } else {
    res.status(400).json({message: "missing body parameters"})
  }
}

const patchPet = async (req, res) => {
  //get the existing pet 
  //merge the exiting pet with the new data in req.body
  //communicate with the DB to update all fields of the pet
  res.status(201).json("updated pet")
}

module.exports = {
  getAllPetsAPI,
  createPet,
  updatePet,
  patchPet
}