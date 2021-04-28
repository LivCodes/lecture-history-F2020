import {useEffect, useState} from 'react'
import Header from './Header'
import Team from './Team'
import Searchbar from './Searchbar'
import PokemonCollection from './PokemonCollection'

function App() {
  return (
    <div className="App">
      <Header />
      <Team />
      <Searchbar />
      <PokemonCollection />
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