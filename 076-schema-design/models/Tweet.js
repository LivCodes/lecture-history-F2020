const db = require("../db/db");

class Tweet {
  static getTweets(){
    const queryText = "SELECT * FROM tweets";
    return db.query(queryText).then(results => results.rows);
  }
}

module.exports = {Tweet}