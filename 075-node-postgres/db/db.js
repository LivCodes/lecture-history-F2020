require('dotenv').config();

const {Pool} = require('pg')

const connectionLocal = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
}

console.log("DB info: ", connectionLocal)

const connectionProduction = {
  connectionString: process.env.DATABASE_URL,
  ssl: {rejectUnauthorized: false}
}

const isProduction = process.env.NODE_ENV === 'production'

const pool = new Pool(isProduction ? connectionProduction : connectionLocal)

const query = (queryText, queryParams) => {
    return pool.query(queryText, queryParams)
}

module.exports = {pool, query}