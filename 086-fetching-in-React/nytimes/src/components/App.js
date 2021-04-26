import TopArticles from './TopArticles'
import SearchArticles from './SearchArticles'

function App() {
  return (
    <div id="App">
      <div className="ui huge message grid">
        <h1 className="ui huge header">New York Times App</h1>
      </div>
      <TopArticles />
      <SearchArticles />
    </div>
  );
}

export default App;
