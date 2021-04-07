const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

router.use("/:id", usersController.authenticate)

router.get("/:id", usersController.getUser) //:id is the users's id

router.patch("/:id", usersController.updateUser)

router.delete("/:id", usersController.deleteUser)

router.post("/", usersController.createUser)

module.exports = router;