import Card from './Card'

function PokemonCollection(props){
  return (
    <>
      <h3>Pokemon Collection:</h3>
      <div>
        {props.pokemon.map(pokemon => <Card key={pokemon.id} pokemonData={pokemon}/>)}
      </div>
    </>
  )
}

export default PokemonCollection