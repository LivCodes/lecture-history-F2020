# Domain Modeling and Schema Design
* ERD 
  * What are your entities?
  * How are they related?
    * One to Many
    * Many to Many / Has Many through (Need a Join Table)
    * One to One (when your table gets too big)

## Practice
* What would domain modeling and schema design for Twitter look like?

## Example of RESTful urls
*  GET  /tweets/      => show all tweets
*  GET  /users        => show all users
*  POST /likes        => like a tweet
*  DELETE /likes       => unlike a tweet
*  GET /users/:user_id/likes  

/users/3/likes => return a json of user 3's liked tweets
/users/2/tweets => return all the tweets written by user 2

## Express Model-View-Controller
* [MVC in Express Diagram](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)

* GET  /tweets            => show all tweets in twitter organized by latest first
* GET  /users/:id/tweets  => show the tweets written by a specific user
* POST /likes    => how to like a tweet


GET /tweets
POST /tweets
DELETE /tweet/:id

GET /users
GET /users/:id
GET /users/:id/tweets
GET /users/:id/likes
POST /users
PATCH /users
DELETE /users

GET /likes
POST /likes
DELETE /likes