import {useHistory} from 'react-router-dom'

function Painting(props){
  const {painting} = props
  let history = useHistory();

  function goToPaintingUrl(){
    history.push(`/paintings/${painting.slug}`)
  }

  return(
    <div className="ui card">
      <div>
        <img src={painting.image} alt={painting.title}/>
        <div>
          {painting.title}
        </div>
      </div>
      <button onClick={goToPaintingUrl}>More Info</button>
    </div>
  )
}

  export default Painting