# JS Events

## Does it matter where you put the script tag?

## What types of events are there?
* https://developer.mozilla.org/en-US/docs/Web/Events


* Very important one: DOMContentLoaded

## .addEventListener
- takes in a string for the name of the event, and a callback function to be invoked when the event happens
- (optional) argument for the callback is the event itself

## Review Callbacks!
- A callback is a function that is passed as an argument into another function

## Practice
1. Refactor our code to generate our table of instructors based on a given array of data.
2. When I click on an ".email" <td>, the color changes to blue
3. When I click on a row, the background color changes to gray


## The event object
- `event.target` vs `event.currentTarget`

## Bubbling vs. Capturing, and Propagation
- Capturing phase – the event goes down to the element.
- Target phase – the event reached the target element.
  * `event.target` is the innermost node that triggers the event
- **Bubbling phase** – the event bubbles up from the element.
  * When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

- By default, event are fired during the bubbling phase
- `event.stopPropagation()` to stop bubbling

## More practice 
- Mouse enter and mouse leave the thead
- Double click the table head to hide it?