# APIs and AJAX

## Async JavaScript Review
* JavaScript is single threaded. It can only do one thing at a time.
* Normally, this isn't a problem unless a process takes a while, then it's blocking.
    * What if we want to communicate with other apps on the internet?
* Asynchronous code is non-blocking! Hooray!!

## AJAX
* Stands for Asynchronous JavaScript And XML
* The process of requesting data from the Internet to be used in a JavaScript program.
* XML _used_ to be the most common data format, but that has since been replaced by JSON.
* A better name would now be AJAJ, but the old name has stuck...


## JSON
* JavaScript Object Notion
* A type of data format that is a **string** in the shape of a JavaScript object.
* We can convert JSON string to JavaScript object using `JSON.stringify()` and `JSON.parse()`.


## APIs (What's it stand for?)
* How our program can interface (interact) with other applications/programs 
* CLI (Command Line Interface)
* GUI (Graphical User Interface)

## Examples of APIs

#### APIs can be Informative/Educational
* [Google Books API](https://www.googleapis.com/books/v1/volumes?q=javascript+programming)
* [Space API](http://api.open-notify.org/astros.json)

#### APIs can be fun/funny
* [Pokemon API](https://pokeapi.co/api/v2/pokemon/)
* [Rick and Morty API](https://rickandmortyapi.com/api/character)
* [Stuido Ghibli API](https://ghibliapi.herokuapp.com/people)

#### APIs kind of pointless...
* [Jokes API](https://v2.jokeapi.dev/joke/Pun)
* [Advice API](https://api.adviceslip.com/advice)


## Learn by doing!
* Create a webpage that lists all the Rick and Morty by requesting that information from an API!