const {User} = require('../models/User');

const getUsersTweets = async (req, res) => {
  const id = req.params.id
  try{
    const usersTweets = await User.getUserTweets(id)
    const user = await User.getUser(id)
    user.tweets = usersTweets
    res.status(200).json(user)
  }catch{
    res.sendStatus(500)
  }
}

module.exports = {
  getUsersTweets
}