const db = require("../db/db");

class User {
  static getUserTweets(id){
    const queryText = "SELECT * FROM tweets WHERE user_id = $1";
    return db.query(queryText, [id]).then(results => results.rows)
  }

  static getUser(id){
    const queryText = "SELECT * FROM users WHERE id = $1";
    return db.query(queryText, [id]).then(results => results.rows[0])
  }
}

module.exports = {User}