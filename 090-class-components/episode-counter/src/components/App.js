import {Component} from 'react'
import Header from './Header'
import EpisodeList from './EpisodeList'

class App extends Component {
  state = {
    episodes: [],
    showHeader: true
  }

  componentDidMount(){
    fetch("http://localhost:4000/episodes")
    .then(res => res.json())
    .then(data => {
      this.setState({episodes: data})
    })
  }

  toggleHeader = () => {
    this.setState({showHeader: !this.state.showHeader})
  }

  render(){
    const {showHeader, episodes} = this.state
    return (
      <div className="App">
        <button onClick={this.toggleHeader}>
          {showHeader ? "Hide Header" : "Show Header"}
        </button>
        {showHeader ? <Header /> : null}
        <EpisodeList episodes={episodes}/>
      </div>
    );
  }
}

export default App;
