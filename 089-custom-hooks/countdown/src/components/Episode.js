import { useToggle } from '../hooks/useToggle'

function Episode(props){
  const {id, title} = props.data

  const [isFavorited, toggleFavorited] = useToggle(false)

  return(
    <div className="border">
      <span onClick={toggleFavorited}>{ isFavorited ? "❤️" : "♡" }</span>
      <span>Episode {id}: {title}</span>
    </div>
  )
}

export default Episode