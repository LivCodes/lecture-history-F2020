# Class Components - A Legacy pattern in React
* Before React version 16.8 (Hooks), class components were the only way to have state and side effects!

```
App
|- Header
|- EpisodeList
    |- Episode ...
```

## Render method
```js
import React from 'react'

class MyComponent extends React.Component{
    render(){
        return <div>Some JSX</div>
    }
}
```

## Props
* `this.props`

## State
* How to initialize State

```js
constructor(){ 
    super() //this calls the contructor in the parent class
    this.state = {}
}
```

* How to update state
    * `this.setState(obj)`
        * obj passed into `setState` will be **merged** with the existing state object
    * `this.setState(prevState => newState)`
        * newState should be an object that is merged into the old state

## Instance Methods

```js
class MyComponent(){
    instanceMethod(){

    }

    render(){
        <div onClick={this.instanceMethod}></div>
    }
}
```

## Lifecycle Methods
* `componentDidMount()`
* `componentDidUpdate()`
* `componentWillUnmount()`


#### Extra Notes:

``js
const [isFavorite, setIsFavorited] = useState(false)

setIsFavorited(false)
setIsFavorited( (prevState) => {return !prevState} )



useEffect(()=>{
    //set up event handler for the window 
    return () => {
        //destroy event handle for the window
    }
}, [])
``