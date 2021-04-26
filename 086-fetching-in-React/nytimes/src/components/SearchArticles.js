import { useState } from 'react'
import Article from './Article'

function SearchArticles(){
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="ui container segment">
      <h1>Search Stories</h1>
      <form id="search-form" className="ui form">
        <div className="field">
          <label>Search Articles</label>
          <input value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} placeholder="Search Term" />
        </div>
        <button className="ui button" type="submit">Search</button>
      </form>
      <ul id="search-results">
        {<Article />}
      </ul>
    </div>
  )
}

export default SearchArticles