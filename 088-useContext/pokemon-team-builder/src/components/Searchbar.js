import {useContext} from 'react'
import PokemonContext from  '../context/PokemonContext'

function Searchbar(){
  const {searchTerm, setSearchTerm} = useContext(PokemonContext)

  function handleChange(e){
    setSearchTerm(e.target.value)
  }

  return (
    <input className="search" placeholder="Search..." value={searchTerm} onChange={handleChange}/>
  )
}

export default Searchbar