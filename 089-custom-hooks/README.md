# Custom Hooks

* Hooks: They are functions that allow functional compoennts to "hook" into additional React behaviors

## Example of Hooks
* `useState()`

const array = useState(initState)
const [item, setItem] = useState('')

* `useEffect()`

Side-effects: timer, fetch, manual DOM manipulate, manual events
state change => re-renders => useEffect

* `const {count, setCount, state, stateChanger} = useContext(ContextObject)`

Context object is where we can store state


## [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)

Only Call Hooks from React Functions
Don’t call Hooks from regular JavaScript functions. Instead, you can:

✅ Call Hooks from React function components.
✅ Call Hooks from custom Hooks.

By following this rule, you ensure that all stateful logic in a component is clearly visible from its source code.

## [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)
* When we want to share behavior between two different JavaScript functional components, we extract it to a third function.
* Name your hook `use_____`


`useToggle()`

```js
// initialize state of toggled (boolean)
// create any functions we need for modifying the state
// return whatever we want another component to have access to
```

function App(){
  useState()
  useEffect()
  useContext()

  for(
    /* don't set up hooks here */
  )

  function handleClick(){
    /* don't set up hooks here */
  }

  return (

  )
}