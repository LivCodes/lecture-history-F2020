import {useEffect, useState} from 'react'
import Header from './Header'
import Team from './Team'
import Searchbar from './Searchbar'
import PokemonCollection from './PokemonCollection'

//When the App loads, I make a fetch call, and update the state
//onChange of the input => update the state
//on click of a Card in PokemonCollection, update the state of myTeam by adding
//on click of a Card in Team, update the state of myTeam by removing

function App() {
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

  function removePokemonFromTeam(removedPokemon){
    setMyTeam(prevTeam => prevTeam.filter(p => p !== removedPokemon))
  }

  return (
    <div className="App">
      <Header />
      <Team team={myTeam} removePokemonFromTeam={removePokemonFromTeam}/>
      <br />
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <PokemonCollection pokemons={getFilteredPokemon()} addPokemonToTeam={addPokemonToTeam}/>
    </div>
  );
}

export default App;









/*

<div>
  <button>Reset Team</button>
</div>

<input className="search" placeholder="Search..."/>

<div className="pokemon card">
  Pokemon
</div>
*/