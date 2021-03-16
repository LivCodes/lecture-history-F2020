# Node as an HTTP Server
- precursor to Express Framework

## `http` Module
- Used to create server applications
- Let's create an app that:
  * Serves multiple pages
  * Uses query parameters to render dynamic content

```js
const http = require("http") //module.exports
```

## Create Basic Server
1. `const app = http.createServer()` returns a server object.
2. `createServer()` take in a callback function to be invoked everytime a request is made.
3. That callback function has two arguments, `request` and `response`.
4. `app.listen()` takes in a port number and a callback function to run when the server starts.
5. You can `response.write()` text or HTML!

```js
const http = require('http')

const server = http.createServer(onRequest)

function onRequest(request, response){
  response.writeHead(200)
  response.write('<h1>Hello World</h1>');
  response.end();
}

server.listen('8080', () => {
  console.log("Server started. Listening on port 8080")
})
```

## Nodemon (Automatically restart the server when files change)
- `npm install -g nodemon`
- `nodemon app.js` instead of `node app.js`

## Handling Mutiple Paths
- Right now, we see the same page no matter what path
- `const url = require('url')`
- `pathName = url.parse(request.url).pathname` and `console.log(pathName)`

## How to use debugger for Node.js in VSCode!




## Fix URL parse issue 

## Modular Code and HTML Templating
- `fs.readFile(path, [options], callback)`

## Query Parameters
- Create a dynamic content that depends on query parameters
- `let queryObj = url.parse(request.url, true).query`