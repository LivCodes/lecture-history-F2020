import Card from './Card'

function PokemonCollection(props){
  const {pokemon} = props

  return (
    <>
      <h3>Pokemon Collection:</h3>
      <div>
        {pokemon.map(pokemon => <Card key={pokemon.id} pokemonData={pokemon}/>)}
      </div>
    </>
  )
}

export default PokemonCollection