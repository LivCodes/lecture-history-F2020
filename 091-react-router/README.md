# [React Router](https://reacttraining.com/react-router/web/guides/quick-start)

### Goal:
- Build out many 'views'
- the URLs take you to a certain view
- build out navigation tools to get from one page to another

### Set Up
- `npm install react-router-dom`

### BrowserRouter
- Will use 1 place in our application (and one place only) at the very top level
- Sometimes aliased
- `import {BrowserRouter as Router} from 'react-router-dom'`

### Route
- Conditionally render a certain component based on if the path of the url matches the path prop
- What does the exact prop do?

### Routes Params `/:id`

### Link
- Changes the url we see in the browser without a reload, must have a 'to' prop
- Route components will re-render and show components based on new url
- works with the browser's native back and forward controls


### Switch
- Pick one of the following routes (the first that matches) and load that component
- Doesn't look at the others (like an if/ else if/ else if)
- Takes in no props
