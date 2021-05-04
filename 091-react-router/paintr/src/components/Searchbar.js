import {useContext} from 'react'
import PainterContext from '../context/PainterContext'

function Searchbar(){
  const {searchTerm, setSearchTerm} = useContext(PainterContext)

  return (
    <div className="ui large icon input">
      <input type="text" placeholder="Search..." value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>
    </div>
  )
}

export default Searchbar