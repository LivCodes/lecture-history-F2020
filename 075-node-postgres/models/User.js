const {query} = require('../db/db')

class User {
    static getUsers(){
        return query('SELECT * FROM people ORDER BY id;')
            .then(data => data.rows)
    }

    static getUser(id){
        return query('SELECT * FROM people WHERE id =  $1', [id])
            .then(data => data.rows[0]);
    }

    static createUser(name, email){
        return query('INSERT INTO people (name, email) VALUES ($1, $2) RETURNING id', [name, email])
            .then(data => data.rows[0].id)
    }

    static updateUser(name, email, id){
        return query('UPDATE people SET name = $1, email = $2 WHERE id = $3 RETURNING id', [name, email, id])
            .then(data => data.rows[0])
    }
}

module.exports = User;