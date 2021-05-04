# [React Router](https://reacttraining.com/react-router/web/guides/quick-start)

## What is Client Side Routing and How does it differ from Server Side Routing?
* Everytime we requested a new URL in express, explain the request response cycle
* How does JS handle changes in the URL?
* `history.back()`, `history.forward()`, `history.pushState({}, "", "/maya")`
* React Router uses these tools to change the URL and uses conditional rendering to display only certain components!!

### Paintr
```
*App
  |- Navbar
  |- About
  |- PaintingDetails
  |- Gallery
      |- Searchbar
      |- PaintingsContainer
            |- PaintingCard
```

### Goal:
1. Build out many 'views'
1a. the URLs take you to a certain view
2. build out navigation tools to get from one page to another

### Set Up
- `npm install react-router-dom`

### BrowserRouter
- Will use 1 place in our application (and one place only) at the very top level
- Sometimes aliased
- `import {BrowserRouter as Router} from 'react-router-dom'`

If the URL is `/about` => render the About component

### Route
- Conditionally render a certain component based on if the path of the url matches the path prop
- `component` prop
- What does the exact prop do?
- `render` prop

Problem: Given a URL of `/paintings/:id`
* figure out which painting to display

Solution: 
* we have a state called `paintings`
* iterate through our `paintings` state to find painting that matches `:id`

### Routes Params `/:id`
- You can forward the Router Props!
- Or you can use the `useParams` Hook!

### Changing the URL
- `routerProps.history.push(relativeUrl)`
- Or use the {Link} component

### Link
- Changes the url we see in the browser without a reload, must have a 'to' prop
- Route components will re-render and show components based on new url
- works with the browser's native back and forward controls

### Switch
- Pick one of the following routes (the first that matches) and load that component
- Doesn't look at the others (like an if/ else if/ else if)
- Takes in no props

### Refactor to `useContext`
