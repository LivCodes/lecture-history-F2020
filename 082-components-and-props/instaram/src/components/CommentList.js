import React from 'react'
import Comment from './Comment'
import commentsArray from '../data/comments'

function CommentList(){
  return (
    <div>
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

export default CommentList