import {useState} from 'react'

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0)

  return (
    <div className="dark">
      <h1>{count}</h1>
      <div>
        <button onClick={()=>{setCount(prev => ++prev)}}>+</button>
        <button onClick={()=>{setCount(prev => --prev)}}>-</button>
      </div>
    </div>
  )
}

export default App;
