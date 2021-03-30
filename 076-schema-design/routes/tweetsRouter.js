const express = require('express')
const router = express.Router();
const tweetsController = require('../controllers/tweetsController')

router.get('/', tweetsController.getTweets)

module.exports = router