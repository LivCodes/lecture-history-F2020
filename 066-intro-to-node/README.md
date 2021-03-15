# Intro to Node

## What is Node?
- JavaScript that doesn't live in the Browser

## Why Node?
- We can run JavaScript outside the browser, we've done it before!
- Node REPL (Read-Eval-Print-Loop)
- Build desktop apps
- Interact with files at the computer level

## What is Server Side Development?
- Why might engineers want to program in JavaScript on a server rather than in the browser?
  - More secure and scalable
  - Run code on a computer far away (on a server)
 
## Let's Build our first HelloWorld App (Code Along)
- Create a folder called Intro-to-Node
- `cd` into it, and `touch` to create a file called `app.js`
- `console.log` the string `hello, world!` 
- Run the file using `node app.js`

## Using Node Modules and `require`
- Pause the Code Along
- A Module is file that gives us reusable code!
- [Node Documentation](https://nodejs.org/docs/latest/api/)
- in order to use a modele, we must `require` it.

```js
  const fs = require("fs");
  fs.writeFile("file.txt", data, callback);
```

## Creating our own modules and `modules.exports`
- Resume Code Along
- As our code grows, we should break it up into different files.
- How will our code commnicate with each other like it did in the browser?
- `module.exports` to export some code.
- to inport the code, `require` the local path, but the .js extention not needed .

```js
const rn = require("./randomNames")
```

## Packages and NPM 
- A Package is a folder with one more more modules inside of it.
- NPM (Node Package Manager) is the world's largest collection of Node Packages!
- You can incorpate a ton of packages that other people wrote into your own code!
- Run `npm init` to create a node project
- `package.json` is created
- `dependencies` are a list of packages your project depends on

> Shop for packages like the [superheroes](https://www.npmjs.com/package/superheroes) or [supervillains](https://www.npmjs.com/package/supervillains)

- `node_modules` is a folder that is created that stores all of your packages. You should always ignore this directory. 
- You can create an `npm start` script!