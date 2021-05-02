# Class Components
* `Header`
* `EpisodeList`
* `Episode`
* `App`

## Render method
```js
import React from 'react'

class MyComponents extends React.Component{
    render(){
        return <div>Some JSX</div>
    }
}
```

## Props
* `this.props`

## State
* How to initialize State

```
constructor(){ 
    super()
    this.state = {

    }
}
```

OR

`state = {}`

* How to update state
    * `this.setState(obj)`
        * obj passed into `setState` will be **merged** with the existing state object
    * `this.setState(prevState => newState)`

## Instance Methods

## Lifecycle Methods
* `componentDidMount()`
* `componentDidUpdate()`
* `componentWillUnmount`
