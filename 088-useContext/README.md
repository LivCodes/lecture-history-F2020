# [useContext]()

In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

## Step 1. createContext()

```
const MyContext = React.createContext()
```
* Creates a Context object. 
* A Context object has two properties that are components: `MyContext.Provider` and `MyContext.Consumer`. 
* Every Context object comes with a Provider React component that allows consuming components to subscribe to state changes.

## Step 2. Create a Provider Component to hold state

* Create a custom component that holds state
* This component returns <MyContext.Provider value={/* some object that references state and callbacks */}>

## Step 3. Consume state

* `MyContext.Consumer` for `class` components
* `useContext()` for `function` components
* `const state = useContext(MyContext)` takes in a Context object as an argument and returns the `value` prop passed into `MyContext.Provider`


PokemonContext.js
```js
import {createContext} from 'react'

const PokemonContext = createContext()

export default PokemonContext
```

PokemonProvider.js
```js
import PokemonContext from './PokemonContext'
import {useState} from 'react'

function PokemonProvider(props){
  const [myTeam, setMyTeam] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [allPokemon, setAllPokemon] = useState([])

  const initialState = {
    myTeam,
    setMyTeam,
    searchTerm,
    setSearchTerm,
    allPokemon, 
    setAllPokemon
  }

  return (
    <PokemonContext.Provider value={initialState}>
      {props.children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider
```
