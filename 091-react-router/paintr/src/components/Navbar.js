import {Link} from 'react-router-dom'

function NavBar(){
  return(
    <div className="ui inverted blue menu navbar">
      <Link to="/" className="item">
        <h2 className="ui header">
          <i className="paint brush icon"></i>
          <div className="content">Paintr</div>
          <div className="sub header">Beautiful Paintings</div>
        </h2>
      </Link>
      <Link to="/about" className="item">About</Link>
      <Link to="/" className="item">Gallery</Link>
    </div>
  )
}

export default NavBar
