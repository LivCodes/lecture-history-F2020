# POST and DELETE Fetch 

## Fetch methods
* GET - when we want to get data from a server
* POST - want to send information to a server (get a response back)
* DELETE - want to send a request to delete a resource (from some Database or server, etc.) 
* PATCH - update
* PUT - update

## Github API (Gists)
* My gists: https://gist.github.com/thuyanduong

## Let's GET all my Gists

## Fetch options 
* `method` => string    //"GET", "POST", "DELETE"
* `headers` => object   //{"Authorization": "fhdaosf", "Content-Type" : "json"}
* `body` => JSON string

## Let's make a POST fetch to create a new Gist

Options object: 
* `method` MUST be "POST" or "post"
* `headers` more or less the same as GET for this API
* `body` is data we want to send to the server to complete our request!!!!

## Let's make a POST fetch to create a new Gist Comment

## How do you have error validation?

## Let's make a DELETE fetch to delete our Gist

Options object: 
* `method` MUST be "DELETE" or "delete"
* `headers` are same as GET for this API
* no `body` is needed in the options object

### What type of reponse do we get after our DELETE request?

