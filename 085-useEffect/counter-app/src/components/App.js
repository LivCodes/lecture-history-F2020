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
  const [isDarkMode, setDarkMode] = useState(true)

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <h1>{count}</h1>
      <div>
        <button onClick={()=>{setCount(prev => ++prev)}}>+</button>
        <button onClick={()=>{setCount(prev => --prev)}}>-</button>
      </div>
      <button onClick={()=>{setDarkMode(prev => !prev)}}>Toggle Dark Mode</button>
    </div>
  )
}

export default App;
