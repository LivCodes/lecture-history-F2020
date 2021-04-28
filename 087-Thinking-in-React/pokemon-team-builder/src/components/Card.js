function Card(props){
  const {pokemon, clickHandler} = props

  return (
    <div className="pokemon card" onClick={()=>{clickHandler(pokemon)}}>
      <div>
        <img alt="oh no!" src={pokemon.sprites.front}/>
      </div>
      {pokemon.name}
    </div>
  )
}

export default Card