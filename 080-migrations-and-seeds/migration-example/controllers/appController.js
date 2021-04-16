const db = require("../db/config")

const getAll = async (req, res) => {
    try{
        const users = await db.query("SELECT * FROM users ORDER BY id").then(results => results.rows)
        const pets = await db.query("SELECT * FROM pets ORDER BY id").then(results => results.rows)
        res.json({users, pets})
    }catch{
        res.status(500).send("Error with database")
    }
}

const getUsers = async (req, res) => {
    try{
        const users = await db.query("SELECT * FROM users ORDER BY id").then(results => results.rows)
        res.json(users)
    }catch{
        res.status(500).send("Error with database")
    }
}

const getUser = async (req, res) => {
    try{
        const id = req.params.id
        const user = await db.query("SELECT * FROM users WHERE id = $1", [id]).then(results => results.rows[0])
        res.json(user)
    }catch{
        res.status(500).send("Error with database")
    }
}

const getPets = async (req, res) => {
    try{
        const pets = await db.query("SELECT * FROM pets ORDER BY id").then(results => results.rows)
        res.json(pets)
    }catch{
        res.status(500).send("Error with database")
    }
}

const getPet = async (req, res) => {
    try{
        const id = req.params.id
        const pet = await db.query("SELECT * FROM pets WHERE id = $1", [id]).then(results => results.rows[0])
        res.json(pet)
    }catch{
        res.status(500).send("Error with database")
    }
}

module.exports = {
    getAll,
    getUsers,
    getUser,
    getPets,
    getPet
}