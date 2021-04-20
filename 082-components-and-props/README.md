# Review React and ReactDOM

We are pulling in three things from CDNs:
- What is the difference between React and ReactDOM?
- What is the role of babel?
- How do we create custom components and render them?

## Live Server Note
- requires VS Code Live Server
- `sudo npm install -g serve` to install the `serve` tool
- Run `serve .` in the root of your project to start a front-end server

## Practice Planning and Building out a UI
- Instagram!

## React Development Tools
- Allows you to see your Component Hierarchy 
- What Data Struture is the DOM?
  - Well in React, it's the same thing


## Create React App
- Modern toolchain
- Provides you with 90% of what you need to start coding in React and is production ready
- Using something called **Webpack** that allows us to write code in mulitple files and it will be packaged together
- Let's look at the `package.json`, `/public`, `index.js`



// module.exports = {}
// require()

// export something
// import something



## Imports
- `import`
- like `require`

## Best Practices
- Create your components in seperate files 
- `export {}` and `export default`
- _Really_ familiarize yourself with React Dev Tools




```
[
  {commentId: 1, content: "hello", author: "Adrian"}, 
  {commentId: 2, content: "heyyy", author: "Billy"}, 
  {commentId: 3, content: "hiya", author: "Carlo"}
]
```

```
[
  {
    userId: 1, postTitle: "", comments: [
      {commentId: 1, content: "hello", author: "Adrian"}, 
      {commentId: 2, content: "heyyy", author: "Billy"}, 
      {commentId: 3, content: "hiya", author: "Carlo"}
    ]
  }
]
```