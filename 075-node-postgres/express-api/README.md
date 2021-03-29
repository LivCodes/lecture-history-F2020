# Express API
- Builds a CRUD Restful API that connects to a Postgres Database
- Domain: Users
- Entity Relationship Diagram

## 1. Set up express app
- `npm init`
- `npm i express`
- index.js
- package.json scripts

## 2. `.gitignore`
- `node_modules`

## 3. Setting up Postgres
- We first need to create our DB via psql or pgAdmin
- We will use node-postgres to connect our express app to our DB
    - `npm install pg dotenv`
    - `db` folder will hold a `db.js` file
    - `.env` will store our environment variables and put in `.gitignore`

```js
require('dotenv').config() 
const {Pool} = require('pg')

const connectionLocal = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
}

const connectionProduction = {
  connectionString: process.env.DATABASE_URL, 
  ssl: {rejectUnauthorized: false}
}

const isProduction = process.env.NODE_ENV === 'production'


const pool = new Pool(isProduction ? connectionProduction : connectionLocal)

module.exports = {pool}
```

## 4. Create routes

```js
app.get('/users', (req, res) => {
    pool.query("SELECT * FROM users ORDER BY id;", (err, results) => {
        if(err) throw err;
    })
})
```

## 5. Abstraction and Classes
* Create a generate query executer function
* Create `models` folder with a User.js class
* Extra practice: `async` and `await`

```js
const query = (queryText, queryParams) => {
    return pool.query(queryText, queryParams)
}
```

## MVC Design
- Models (how we model tables in javascript) {id: , name: email:}
- Views (individual web pages)
- Controllers (logic and business decisions)









```json
[
  {
    "id": 1,
    "name": "Ann",
    "email": "ann@gmail.com"
  },
  {
    "id": 2,
    "name": "Maya",
    "email": "maya@gmail.com"  
  }
]
```

```json
{
  "id": 2,
  "name": "Maya",
  "email": "maya@gmail.com"  
}
```
SELECT id FROM users
