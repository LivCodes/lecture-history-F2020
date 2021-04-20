const commentsArray = [
  {commentId: 1, content: "hello", author: "Adrian"}, 
  {commentId: 2, content: "heyyy", author: "Billy"}, 
  {commentId: 3, content: "hiya", author: "Carlo"}
]

// App Picture Comment
function Comment(props){
  return <li>{props.content} by {props.author}</li>
}

//create component called App
function App(){
  return (
    <div>
      I am the App component
      <Picture img_url="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"/>
      { 
        commentsArray.map( comment => <Comment 
          key={comment.commentId} 
          author={comment.author} 
          content={comment.content}
        /> ) 
      }
    </div>
  )
}

//create component called Picture
function Picture(props){
  return <img className="small-image" src={props.img_url}/>
}

ReactDOM.render(<App/>, document.getElementById("app"))