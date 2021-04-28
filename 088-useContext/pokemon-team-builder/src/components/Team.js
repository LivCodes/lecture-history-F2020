import Card from './Card'
import {useContext} from 'react'
import PokemonContext from '../context/PokemonContext'

function Team(){
  const context = useContext(PokemonContext)
  const {myTeam, setMyTeam} = context

  function removePokemonFromTeam(removedPokemon){
    setMyTeam(prevTeam => prevTeam.filter(p => p !== removedPokemon))
  }

  return (
    <>
      <h3>Team:</h3>
      <div>
        {myTeam.map(p => <Card key={p.id} pokemon={p} clickHandler={removePokemonFromTeam}/>)}
      </div>
    </>
  )
}

export default Team