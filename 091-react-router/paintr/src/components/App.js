import Navbar from './Navbar'
import PaintingDetails from './PaintingDetails'
import Gallery from './Gallery'
import About from './About'
import {Route, Switch, Redirect} from 'react-router-dom'

function App() {
  return (
    <div id="App" className="App">
      <Navbar />
      <Switch>
        <Route path={["/about", "/easter-egg"]} component={About} />
        <Route path="/paintings/:slug" component={PaintingDetails} />
        <Route exact path="/" component={Gallery} />
        <Route path="/" render={() => <Redirect to="/" />}/>
        {/* <Route path="/" render={() => <h1>404 Not Found</h1>}/> */}
      </Switch>
    </div>
  );
}


export default App;
