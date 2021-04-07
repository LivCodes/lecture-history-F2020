const express = require('express')
const router = express.Router()
const petsController = require('../controllers/petsController');

router.get('/:id', petsController.getPet)

router.post('/', petsController.createPet)

router.patch('/:id', petsController.updatePet)

router.delete('/:id', petsController.deletePet)

module.exports = router;