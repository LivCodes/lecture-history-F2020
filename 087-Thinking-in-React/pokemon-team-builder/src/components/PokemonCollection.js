import Card from './Card'

function PokemonCollection(props){
  const {pokemons, addPokemonToTeam} = props //array of pokemon objects
  return (
    <>
      <h3>Pokemon Collection:</h3>
      <div>
        {pokemons.map(p => <Card key={p.id} pokemon={p} clickHandler={addPokemonToTeam}/>)}
      </div>
    </>
  )
}

export default PokemonCollection