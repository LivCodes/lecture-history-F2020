const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

router.get("/", usersController.getAllUsersView)

router.get("/.json", usersController.getAllUsersAPI)

router.get("/:id", usersController.getUserView)

router.get("/:id/.json", usersController.getUserAPI)

router.get('/:id/pets/new', usersController.createNewPet)

module.exports = router;