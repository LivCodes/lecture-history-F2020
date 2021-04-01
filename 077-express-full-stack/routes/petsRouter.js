const express = require('express')
const router = express.Router()
const petsController = require('../controllers/petsController');

router.get('/.json', petsController.getAllPetsAPI)

router.post('/', petsController.createPet)

router.put('/:id', petsController.updatePet)

module.exports = router;