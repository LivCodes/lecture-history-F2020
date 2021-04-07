const db = require('../db/config')

class User {
  static getAllUsers(){
    const queryText = "SELECT * FROM users ORDER BY id";
    return db.query(queryText).then(results => results.rows)
  }

  static getUser(id){
    const queryText = "SELECT * FROM users WHERE id = $1"
    return db.query(queryText, [id]).then(results => results.rows[0])
  }

  static getUserByEmail(email){
    const queryText = "SELECT * FROM users WHERE email = $1"
    return db.query(queryText, [email]).then(results => results.rows[0])
  }

  static getUserPets(userId){
    const queryText = "SELECT * FROM pets WHERE user_id = $1"
    return db.query(queryText, [userId]).then(results => results.rows)
  }

  static createUser(name, email){
    const queryText = "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id, name, email"
    return db.query(queryText, [name, email]).then(results => results.rows[0])
  }

  static updateUser({id, name, email}){
    const queryText = "UPDATE users SET name = $1, email = $2 WHERE id = $3"
    return db.query(queryText, [name, email, id]).then(results => results.rows[0])
  }

  static deleteUser(id){
    const queryText = "DELETE FROM users WHERE id = $1"
    return db.query(queryText, [id])
  }
}

module.exports = User