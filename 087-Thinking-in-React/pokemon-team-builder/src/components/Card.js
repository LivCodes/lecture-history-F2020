function Card(props){
  return (
    <div className="pokemon card">
      <img alt="oh no!" src={props.pokemonData.sprites.front}/>
      {props.pokemonData.name}
    </div>
  )
}

export default Card