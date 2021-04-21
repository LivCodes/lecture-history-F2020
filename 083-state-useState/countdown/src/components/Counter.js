function Counter(props){  
  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={ () => { props.decrement(5) }  }>-5</button>
      <button onClick={ () => { props.decrement(1) } }>-</button>
      <button onClick={ () => { props.increment(1) } }>+</button>
    </div>
  )
}

export default Counter

//form.addEventListener("submit", handleSubmit)
/*
function handleSubmit(event){

}
*/