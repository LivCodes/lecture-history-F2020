const {Like} = require('../models/Like');

const postLike = async (req, res) => {
  const {user_id, tweet_id} = req.body
  try {
    await Like.createLike(user_id, tweet_id)
    res.status(201).json({message: "Like created"})
  } catch {
    res.sendStatus(500);
  }
}

module.exports = {
  postLike
}