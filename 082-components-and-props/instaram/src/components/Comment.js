import React from 'react'

function Comment(props){
  return <li>{props.content} by {props.author}</li>
}

export default Comment