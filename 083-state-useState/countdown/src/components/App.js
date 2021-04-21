import {useState} from 'react'
import '../App.css';
import Header from './Header'
import Counter from './Counter'
import Episode from './Episode'
import data from '../data'

function App() {
  //our state that Counter will keep track of is a number
  let [count, setCount] = useState(data.length) 

  function decrement(num){
    if(count > 0){
      setCount(count-num) 
    }
  }

  function increment(num){
    setCount(prevState => prevState + num)
  } 

  return (
    <div className="App">
      <Header color="lightgray" countVal={count}/>
      <Counter count={count} increment={increment} decrement={decrement}/>
      {data.map(episode => <Episode key={episode.title} data={episode}/>)}
    </div>
  );
}

export default App;
