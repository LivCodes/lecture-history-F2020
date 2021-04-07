const express = require('express')
const router = express.Router()
const petsController = require('../controllers/petsController');

router.get('/:id', petsController.getPet) //:id is the pet's id

router.patch('/:id', petsController.updatePet)

router.delete('/:id', petsController.deletePet)

router.post('/', petsController.createPet)

module.exports = router;