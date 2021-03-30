const db = require("../db/db");

class Like {
  static createLike(userId, tweetId){
    const queryText = "INSERT INTO likes (user_id, tweet_id) VALUES ($1, $2) RETURNING user_id, tweet_id";
    return db.query(queryText, [userId, tweetId])
  }
}

module.exports = {Like}