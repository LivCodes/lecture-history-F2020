# REST APIs

## What is REST
* Stands for “Representational State Transfer”
* REST determines how the API looks like.  
* It is a set of rules that developers follow when they create their API.

## RESTful API Table
 ![table](https://i.imgur.com/Z5zdpdc.png)

## Structure of a REST API
* base_url/ ... / resources /?
* GET `/blogs` would return a list of all blogs on the server
* GET `/blogs/1` would return a single blog that has the id of 
* POST `/blogs` would create a new blog
* DELETE `/blogs/1` would delete the blog with an id of 1
* PATCH `/blogs/1` would update the blog with an id of 1
* PUT `/blogs/1` would update the blog with an id of 1

## JSON Server 
* A tool to mock a RESTful API and host it on your computer
* [Documentation](https://github.com/typicode/json-server)
* Intallation instructions: In the temrinal, run `npm install -g json-server`

## Creating a Mock API 
* Create a `.json` file
* This file is a single object with keys of the resource names
* Each resource is an array of objects

## Running JSON Server
* In your temrinal, run `json-server --watch db.json`
* where `db.json` is the path to your json file!
* POST, PUT, and PATCH requests to JSON Server will need a header of `{"Content-Type": "application/json"}`

### Example fetches 

```js
// Get data for all monster on the server
fetch("http://localhost:3000/monsters")
.then(res => res.json())
.then(data => {
  console.log(data)
})
```

```js
// Get data for a single monster (moner with id of 4)
fetch("http://localhost:3000/monsters/4")
.then(res => res.json())
.then(data => {
  console.log(data)
})
```

```js
// Create a monster
fetch("http://localhost:3000/monsters", {
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({name: "", age: "", description: ""})
})
.then(res => res.json())
.then(data => {
  console.log(data)
})
```

```js
// Delete the monster with id of 4
fetch("http://localhost:3000/monsters/4", {
  method: "DELETE"
})
```