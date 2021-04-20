import React from 'react'

function Picture(props){
  return <img className="small-image" alt="eyeball" src={props.img_url}/>
}

export default Picture