import {useEffect, useState} from 'react'
import Header from './Header'
import Team from './Team'
import Searchbar from './Searchbar'
import PokemonCollection from './PokemonCollection'

//When input changes => update the state => write the code for what the DOM looks like

function App() {
  const [myTeam, setMyTeam] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [allPokemon, setAllPokemon] = useState([])
  
  //When app loads
  useEffect(()=>{
    //make a fetch
    fetch("http://localhost:4000/pokemon")
      .then(res => res.json())
      .then(data => {
        setAllPokemon(data)
      })
  }, [])

 

  function getFilteredPokemon(){
    return allPokemon.filter(pokemon => pokemon.name.includes(searchTerm))
  }

  return (
    <div className="App">
      <Header />
      <Team pokemon={myTeam}/>
      <br />
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <PokemonCollection pokemon={getFilteredPokemon()}/>
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