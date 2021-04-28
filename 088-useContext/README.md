# useContext



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
