// /users

const express = require('express')
const router = express.Router();
const usersController = require('../controllers/usersController')

router.get('/:id/tweets', usersController.getUsersTweets)

// router.get("/")

// router.get("/:id")

// router.get("/:id/tweets")

// router.get("/:id/likes")

// router.post("/")

/*
GET /users
GET /users/:id
GET /users/:id/tweets
GET /users/:id/likes
POST /users
PATCH /users
DELETE /users
*/

module.exports = router;