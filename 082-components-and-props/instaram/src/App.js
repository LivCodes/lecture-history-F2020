import React from 'react'
import Picture from './components/Picture'
import CommentList from './components/CommentList'

function App() {
  return (
    <div className="App">
      I'm the App component
      <Picture className="small-image" img_url="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"/>
      <CommentList />
    </div>
  );
}

export default App;
