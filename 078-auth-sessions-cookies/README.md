# Authentication and Authorization

## Auth vs Auth
* Authentication is checking if you are who you say you are!
* Authorization is checking to see if you are ALLOWED to do something

## Authentication
* We need to save a user's information and encrypted password 
  * Hashing
  * Salt

## `bcrypt` node package
* `bcrypt.hash`
* `bcrypt.compare`

## Building out a simple app
* Register users
* Have registered user log back in

## It seems our app isn't stateful
* Our HTTP requests don't remember that previous HTTP a request was logging in
* to POST /login => we were logged in!!!
* to GET /home => 

## Sessions and Cookies