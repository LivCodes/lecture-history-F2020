import {Link, useParams} from 'react-router-dom'
import PainterContext from '../context/PainterContext'
import {useContext} from 'react'

function PaintingDetails(){
  let { slug } = useParams();
  let { paintings } = useContext(PainterContext)
  const currentPainting = paintings.find(painting => painting.slug === slug)

  return currentPainting ? (
    <>
      <h1>Painting Details</h1>
      <div className="ui segment">
        <div className="ui fluid card">
          <div>
            <img src={currentPainting.image} alt={currentPainting.title} />
            <h3>
              {currentPainting.title}
            </h3>
            <div>{`Artist: ${currentPainting.artist.name}`}</div>
            <div>{`Born: ${currentPainting.artist.birthday}`}</div>
            <div>{`Died: ${currentPainting.artist.deathday}`}</div>
            <div>{`Date: ${currentPainting.date}`}</div>
            <div>
              {`Dimensions: ${currentPainting.dimensions.width} in. x ${currentPainting.dimensions.height} in.`}
            </div>
          </div>
        </div>
        <Link to="/"><button>Back to Gallery</button></Link>
      </div>
    </>
  ) : null
}
  
  export default PaintingDetails
  