# Fetching in React

**When the DOM loads, I want to make a fetch call, and manipulate the DOM**

## How do we check when the DOM has loaded?
* Use the `useEffect` hook to make AJAX calls. 
* How do we write code for when the component first loads?
* `useEffect( ()=>{} , [] )`

document.addEventListener("DOMContentLoaded", calback)

## How do we make a fetch call?
* Same as in vanilla JS (`fetch.then()`)

```
https://api.nytimes.com/svc/topstories/v2/home.json?api-key=dlAvnI6oKNPEZAGh23nyG7kUJzimqjJT
```

```
https://api.nytimes.com/svc/search/v2/articlesearch.json?q=biden&api-key=dlAvnI6oKNPEZAGh23nyG7kUJzimqjJT
```

## How do we manipulate the DOM?
* We update State! And let React take care of the rest
* We just write what we want the DOM to look like

Event, AJAX, DOM:

**When the component first mounts, I want to make a fetch call, and update state**


## What state will this NYTimes app have?
- We want Top Stories to have a list of <li>s
  - `topStories` an array with an init value of []
  - `searchTerm` a string with an init value of ""
  - `searchResults` an array with an init value of []

### Top Stories 

### Search Stories
When the form is submited, make a GET fetch to the API, we what to update the state of searchResults
