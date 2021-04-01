const db = require('../db/config')

class User {
  //responsible for communicating with our DB

  static getAllUsers(){
    const queryText = "SELECT * FROM users ORDER BY id";
    return db.query(queryText).then(results => results.rows)
  }

  static getUser(id){
    const queryText = "SELECT * FROM users WHERE id = $1"
    return db.query(queryText, [id]).then(results => results.rows[0])
  }

  static getUserPets(userId){
    const queryText = "SELECT * FROM pets WHERE user_id = $1"
    return db.query(queryText, [userId]).then(results => results.rows)
  }
}

module.exports = User