import { useState } from "react"

function Episode(props){
  const {id, title} = props.data

  const [isFavorite, setFavorite] = useState(false)

  function toggleFavorite(){
    setFavorite(!isFavorite)
  }

  return(
    <div className="border">
      <span onClick={toggleFavorite}>{ isFavorite ? "❤️" : "♡" }</span>
      <span>Episode {id}: {title}</span>
    </div>
  )
}

export default Episode