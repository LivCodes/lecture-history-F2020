import {useState, useEffect} from 'react'
import Header from './Header'
import EpisodeList from './EpisodeList'

function App() {
  const [episodes, setEpisodes] = useState([])
  const [showHeader, setShowHeader] = useState(true)

  useEffect(() => {
    fetch("http://localhost:4000/episodes")
      .then(res => res.json())
      .then(episodes => {
        setEpisodes(episodes)
      })
  }, [])

  return (
    <div className="App">
      <button onClick={()=>{setShowHeader(prev => !prev)}}>
        {showHeader ? "Hide Header" : "Show Header"}
      </button>
      {showHeader ? <Header /> : null}
      <EpisodeList episodes={episodes}/>
    </div>
  );
}

export default App;
