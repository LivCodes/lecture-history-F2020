# Fetching in React

**When the DOM loads, I want to make a fetch call, and manipulate the DOM**

## How do we check when the DOM has loaded?
* Use the `useEffect` hook to make AJAX calls. 
* How do we write code for when the component first loads?
* `useEffect( ()=>{} , [] )`

## How do we make a fetch call?
* Same as in vanilla JS (`fetch.then()`)

```https://api.nytimes.com/svc/topstories/v2/home.json?api-key=dlAvnI6oKNPEZAGh23nyG7kUJzimqjJT```

## How do we manipulate the DOM?
* We update State! And let React take care of the rest
* We just write what we want the DOM mto look like

**When the component first mounts, I want to make a fetch call, and update state**