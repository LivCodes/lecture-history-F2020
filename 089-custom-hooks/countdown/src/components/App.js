import {useToggle} from '../hooks/useToggle'
import '../App.css';
import Profile from './Profile'
import EpisodeList from './EpisodeList'
import data from '../data'

function App() {
  const [showProfile, toggleShowProfile] = useToggle()

  return (
    <div className="App">
      <button onClick={toggleShowProfile}>{showProfile ? "Hide Profile" : "Show Profile"}</button>
      { showProfile ? <Profile username="C0dingW1zard" bio="I love React"/> : null }
      <EpisodeList episodes={data}/>
    </div>
  );
}

export default App;
