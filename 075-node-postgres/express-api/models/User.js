const {query} = require('../db/db')

class User {

  static getUsers(){
    const queryText = "SELECT * FROM users ORDER BY id";
    return query(queryText).then(results => results.rows)
    //returns promise of usersArray
  }

  static getUser(id){
    const queryText = "SELECT * FROM users WHERE id = $1";
    return query(queryText, [id]).then(results => results.rows[0])
    //return a promise of a single user
  }

  static createUser(name, email){
    const queryText = "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id, name, email";
    return query(queryText, [name, email]).then(results => results.rows[0])
    //return a promise of a single user
  }

  static updateUser(id, newObj){
    const {name, email} = newObj;
    const queryText = "UPDATE users SET name = $1, email = $2 WHERE id = $3  RETURNING id, name, email"
    return query(queryText, [name, email, id]).then(results => results.rows[0] )
  }

  static deleteUser(id){
    const queryText = "DELETE FROM users WHERE id = $1";
    return query(queryText, [id])
  }
}

module.exports = User

