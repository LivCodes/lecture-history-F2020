# Class Components
* `Header`
* `Episode`
* `EpisodeList`
* `App`

## Render method
```js
class MyComponents {
    render(){
        return <div>Some JSX</div>
    }
}
```

## State
* How to initialize State
    * `this.state = {}`
    * `state = {}`
* How to update state
    * `this.setState(obj)`
    * `this.setState(prev => newState)`

## Props
* `this.props`

## Lifecycle Methods
* `componentDidMount()`
* `componentDidUpdate()`
* `componentWillUnmount`