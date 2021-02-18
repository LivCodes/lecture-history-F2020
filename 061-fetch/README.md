# Intro to Fetch
* XML HTTP Requests (XHR) _used_ to the way to do AJAX. However...

## Introducing the `fetch` API
* [Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* It still uses callback functions as a way to handle Async, but better structured
* To make a `GET``fetch()`, pass in a URL string.
* `fetch` returns a **Promise Object**


## Promise Objects
* Promise were built to handle things that take a long time! 
* I promise I'll eventually get it done!
* A type of object that changes over time!
* [Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Creating (Kicking off) a Promise
* I promise to do something, but it might take a while...
* Don't worry, I'll do it asynchronously!
* Let's try a trival example: Simulate a person trying to decide what to eat for dinner

## How do you know when the promise is done
* Promises have a method called `.then()` which takes in a callback function to process the finished promise


## Callback function review
* Higher Order array methods


## Working with Promises
* 95% of the time, you won't have to create your own Promise objects
* You'll be working with the promise objects returned by fetch!
* Promise chaining: promise objects will only ever return another promise object

## Fetch practice!
* Build a website that tells you who is in space
