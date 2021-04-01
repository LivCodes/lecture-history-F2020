const db = require('../db/config')

class Pet {
  static getAllPets(){
    const queryText = "SELECT * FROM pets ORDER BY id";
    return db.query(queryText).then(results => results.rows)
  }

  static getUserPets(userId){
    const queryText = "SELECT * FROM pets WHERE user_id = $1"
    return db.query(queryText, [userId]).then(results => results.rows)
  }

  static createPet(petName, species, age, userId){
    const queryText = "INSERT INTO pets (pet_name, species, age, user_id) VALUES ($1, $2, $3, $4) RETURNING id, pet_name, species, age, user_id"
    return db.query(queryText, [petName, species, age, userId]).then(results => results.rows[0])
  }
}

module.exports = Pet