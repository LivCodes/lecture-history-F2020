const db = require('../db/config')

class Pet {
  static getAllPets(){
    const queryText = "SELECT * FROM pets ORDER BY id";
    return db.query(queryText).then(results => results.rows)
  }

  static getPet(id){
    const queryText = "SELECT * FROM pets WHERE id = $1";
    return db.query(queryText, [id]).then(results => results.rows[0])
  }

  static createPet(petName, species, age, userId){
    const queryText = "INSERT INTO pets (pet_name, species, age, user_id) VALUES ($1, $2, $3, $4) RETURNING id, pet_name, species, age, user_id"
    return db.query(queryText, [petName, species, age, userId]).then(results => results.rows[0])
  }

  static updatePet({pet_name, species, age, user_id}, id){
    const queryText = "UPDATE pets SET pet_name = $1, species = $2, age = $3, user_id = $4 WHERE id = $5"
    return db.query(queryText, [pet_name, species, age, user_id, id])
  }

  static deletePet(id){
    const queryText = "DELETE FROM pets WHERE id = $1"
    return db.query(queryText, [id])
  }
}

module.exports = Pet