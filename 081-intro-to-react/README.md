# Intro To [React](https://reactjs.org/)
* Powerful front-end library that abstracts away manual DOM Manipulation

### Framework vs Library
* Frameworks are "bigger", more structured
* Libraries are "lighter", more flexible
* You can use as little or as much React as you want for your UI

## Why React?
* Performant and Efficient `renders` (Virtual DOM)
* Maintained by Facebook and thousands of other developers
* **Reusable Components:** Better for a team of developers because it breaks down the UI into smaller chunks
* Emphasis on **Declarative Programming** rather than **Imperative Programming**

## Declarative vs Imperative Programming
* **Imperative programming**: say how you want to code it
* **Declarative programming**: say what you want to code

```js
let array = [3, 6, 1, 8, 2]
let newArray = []
for(let i = 0; i < array.length; i++){
  newArray.push(array[i] * 2)
}
```

```js
let array = [3, 6, 1, 8, 2]
let newArray = array.map(num => num * 2)
```

## Review of Vanilla DOM Manipulation
* This is very Imperative

## Official React Documentation 
* [React Docs and Tutorials](https://reactjs.org)
* [Adding React to a Website](https://reactjs.org/docs/add-react-to-a-website.html)

## Create DOM elements using React and ReactDOM
* THIS IS MORE WORK THAN BEFORE!

## JSX and Babel
* JSX is an extention of JavaScript that allows us to write out our UI in a declartive manner!
* It's like a hybrid between HTML and JS.
* JSX uses a tool called [Babel](https://babeljs.io/repl) to transpile into vanilla JavaScript. 

## Reuseable Components Example
* Create a `MyButton` function
* Create a `MyDiv` function


# Moving Forward
* We are going to be using React (and ReactDOM) to create UI Components.
* We will write these components using JSX syntax which will be transpiled with Babel.
* We will be more focused on write **what** our DOM looks like rather than **how** we manipulate the DOM.
* SOON, we will use Node to `npm install` all of our dependencies