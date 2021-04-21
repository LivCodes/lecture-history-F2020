# State 
- Review building basic React Apps

## Props vs. State
- There are two ways to deal with data in React
- Props: data that is passed from Parent component to Child component
- State: data that is managed by that component. State represents things on the DOM that are ever-changing

## Class component vs Functional component 
```js
function App(){
  return <div className="app"></div>
}

class App extends React.Component {
  render(){
    return <div className="app"></div>
  }
}
```

## Hooks
- It used to be that only class components can have state
- Hooks are a new addition in React 16.8. 
- Hooks are functions that let you “hook into” React state
- They let you use state in functional component

## The `useState` Hook
- `useState(inititalValue)`
- returns an array of two elements
- The first element is a variable that repesents your state!
- The second is a function that allows you to update your state!

## How to update state
- Updating state is asynchronous in React
- When there is a state change, React applies those changes to the Virtual DOM, then updates the real DOM!
- update state in React, asynchronously
- `setCount(newState)`
- `setCount(prevState => {return newState})`

## Lifting State Up
- What happens when multiple components need access to the same state?
- You pull that state up to the common Parent component
- Visual the React Hierarchy
- Data can only be passed down as props, but not side to side
- Pass the state-changing functions as props too!!

## Local State
- Render a list of episodes
- Add a Favorite feature