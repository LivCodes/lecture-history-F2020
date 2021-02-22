# More Fetching
* Let's build a searcher!
    * Giphy API
    * News API
    * Yelp API

3 Pillars: 
When some action happens, make a fetch request, manipulate the DOM

# Using the Browser vs Postman to make API calls


## Query Parameters
* limit
* pagnation 
* search terms
* api-keys

## Forms
* When a user submit a form, we want to make an fetch request to the proper API, and display the results on the DOM.

## Using High Order Methods to Process Data
* `.forEach()`
* `.map()`
* `.filter()`

## Request Headers
* When we fetch, we can fetch with two arguments:
    * url `string`
    * an options `object`
* `fetch(url, optionsObject)`
* Options objects includes key-value pairs like 
    * `method` the HTTP verb for this request
    * `headers` additional information about this request

## Bearer Tokens
* Another form of Authorization and Authentication 

## Async Await Syntax
* A synchronous-like syntax to write your async code!
* An `async` function _always_ returns a promise