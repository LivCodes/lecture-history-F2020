
// A Component (a function that returns some JSX)
// props is a built in React obj
function MyButton(props){
  return <button>{props.text}</button>
}

//Create a MyDiv Component
function MyDiv(props){  
  const {color} = props
  return (
    <div className={`bg-${color}`}>
      I am a {color} div
      <ol>
        <li>Juan Pablo</li>
        <li>Khalo</li>
        <li>Zuko</li>
      </ol>
    </div>
  )
}

ReactDOM.render([<MyButton text="I am button 1" />, <MyButton text="I'm another button" />], document.getElementById("app1"))

ReactDOM.render(<MyDiv color="red"/>, document.getElementById("app2"))

ReactDOM.render(<MyDiv color="blue"/>, document.getElementById("app3"))
