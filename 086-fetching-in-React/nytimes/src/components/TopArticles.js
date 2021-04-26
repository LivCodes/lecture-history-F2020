import Article from './Article'

function TopArticles(){
  return (
    <div className="ui container segment">
      <h1>Top Stories</h1>
      <ul id="top-stories">
        {<Article/>}
      </ul>
    </div>
  )
}

export default TopArticles