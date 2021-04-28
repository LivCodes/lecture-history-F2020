import {useState} from 'react'

function Card(props){
  const [showFront, setFront] = useState(true)

  const {pokemon, clickHandler} = props

  return (
    <div className="pokemon card" onClick={()=>{clickHandler(pokemon)}} 
      onMouseEnter={()=>{setFront(false)}} onMouseOut={()=>{setFront(true)}}
    >
      <div>
        <img alt="oh no!" src={showFront ? pokemon.sprites.front : pokemon.sprites.back}/>
      </div>
      {pokemon.name}
    </div>
  )
}

export default Card