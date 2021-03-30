const {Tweet} = require('../models/Tweet');

const getTweets = async (req, res) => {
  let tweets = await Tweet.getTweets() //promise value = [] of tweets
  res.status(200).json(tweets)
}

module.exports = {
  getTweets
}