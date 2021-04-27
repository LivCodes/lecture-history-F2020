import { useState } from 'react'
import Article from './Article'

function SearchArticles(){
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  function handleSubmit(e){
    e.preventDefault()
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=dlAvnI6oKNPEZAGh23nyG7kUJzimqjJT`)
      .then(res => res.json())
      .then(data => {
        setSearchResults(data.response.docs)
      })
  }

  return (
    <div className="ui container segment">
      <h1>Search Stories</h1>
      <form onSubmit={handleSubmit} id="search-form" className="ui form">
        <div className="field">
          <label>Search Articles</label>
          <input value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} placeholder="Search Term" />
        </div>
        <button className="ui button" type="submit">Search</button>
      </form>
      <ul id="search-results">
        {searchResults.map(story => <Article key={story._id} title={story.headline.main} url={story.web_url}/>)}
      </ul>
    </div>
  )
}

export default SearchArticles