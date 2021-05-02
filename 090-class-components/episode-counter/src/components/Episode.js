import { useState } from 'react'

function Episode(props){

  const [isFavorited, setFavorited] = useState(false)

  return(
    <div className="border">
      <span onClick={()=>{setFavorited(prev => !prev)}}>{ isFavorited ? "❤️" : "♡" }</span>
      <span>Episode {props.data.id}: {props.data.title}</span>
    </div>
  )
}

export default Episode