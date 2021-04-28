import Card from './Card'
import {useContext} from 'react'
import PokemonContext from '../context/PokemonContext'

function PokemonCollection(){
  const context = useContext(PokemonContext) 

  const {allPokemon, searchTerm, myTeam, setMyTeam} = context //returns an obj {6: myTeam, setMyTeam, searchTerm, setSearchTerm, }

  function getFilteredPokemon(){
    const searchFilteredArray = allPokemon.filter(pokemon => pokemon.name.includes(searchTerm))
    const teamFilteredArray = searchFilteredArray.filter(pokemon => !myTeam.includes(pokemon))
    return teamFilteredArray
  }

  function addPokemonToTeam(addedPokemon){
    if(myTeam.length < 6){
      setMyTeam(prevTeam => [...prevTeam, addedPokemon] )
    } else {
      alert("You can't have more than 6 Pokemon on your team")
    }
  }

  return (
    <>
      <h3>Pokemon Collection:</h3>
      <div>
        {getFilteredPokemon().map(p => <Card key={p.id} pokemon={p} clickHandler={addPokemonToTeam}/>)}
      </div>
    </>
  )
}

export default PokemonCollection