# Intro to Express

```js
const express = require('express')

// Instantiate the app
const app = express()

// Specify a port number
const PORT 8080;

// Invoke the app's `.listen()` method 
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
```

## Express Routes
- `app.get(path, callback)`
- `app.post(path, callback)`
- You can return a text, HTML, or JSON!

## Express Views
- Create a folder called views
- `res.sendFile(__dirname + "/views/index.html")`

## Response to POST Requests
- `npm install body-parser` to install dependency
- `const bodyParser = require("body-parser")`
- `app.use(bodyParser.urlencoded({extended: true}))` to parse body in request objects. 
- `{extended: true}` allows for nested objects in the URL.
- **NEW WAY**: `app.use(express.urlencoded({extended: true})`
- console.log `req.body`

## 404 Pages
```js
app.get("*", (req, res) => {
  res.status(404)
  res.send("Not Found")
})
```

## Serving Static Files
- CSS
- JS
- images
- `app.use(express.static('public'))`

## Redirects
- `res.redirect(301, "/")`



## Annoucement
- Asana workshop (postgres)