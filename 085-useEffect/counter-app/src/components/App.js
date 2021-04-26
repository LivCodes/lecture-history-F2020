import {useEffect, useState} from 'react'

function App() {
  const [showCounter, setShowCounter] = useState(true)

  return (
    <div className="App">
      <button onClick={()=>{setShowCounter(false)}}>Remove Counter</button>
      {showCounter ? <Counter /> : null}
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0)
  const [isDarkMode, setDarkMode] = useState(true)

  useEffect(()=>{
    console.log("Invoking useEffect")

    const timerId = setInterval( () => {
      console.log(`Inside setInterval`)
      setCount(prev => prev + 1)
    }, 1000)

    return () => {
      console.log("clean up")
      clearInterval(timerId)
    }

  }, [])

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <h1>{count}</h1>
      <div>

      </div>
      <button onClick={()=>{setDarkMode(prev => !prev)}}>Toggle Dark Mode</button>
    </div>
  )
}

export default App;
















