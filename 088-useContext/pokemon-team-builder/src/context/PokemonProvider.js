//create a Provider component
//establish state in this component 
//export this Provider and make it the parent of App component

import PokemonContext from './PokemonContext'
import {useState, useEffect} from 'react'

function PokemonProvider(props){
  const [myTeam, setMyTeam] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [allPokemon, setAllPokemon] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/pokemon")
      .then(res => res.json())
      .then(data => {
        setAllPokemon(data)
      })
  }, [])

  const value = {
    myTeam, 
    setMyTeam,
    searchTerm,
    setSearchTerm,
    allPokemon, 
    setAllPokemon
  }

  return(
    <PokemonContext.Provider value={value}>
      {props.children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider