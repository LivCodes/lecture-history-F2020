import { useEffect, useState } from 'react'
import Article from './Article'

function TopArticles(props){
  const [topStories, setTopStories] = useState([])

  //Write code equivalent to When This Component is Mounted
  useEffect(()=>{
    fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=dlAvnI6oKNPEZAGh23nyG7kUJzimqjJT")
      .then(response => response.json())
      .then(json => {
        setTopStories(json.results.slice(0, 3))
      })
  }, [])

  return (
    <div className="ui container segment">
      <h1>Top Stories</h1>
      <ul id="top-stories">
        {
          topStories.map((story, index) => <Article key={story.url} title={story.title} url={story.url}/>)
        }
      </ul>
    </div>
  )
}

export default TopArticles