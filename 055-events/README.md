# JS Events

## Does it matter where you put the script tag?

## What types of events are there?
* https://developer.mozilla.org/en-US/docs/Web/Events
- keypress 
- mouseenter and mouseleave
- click 
- doubleclick

* Very important one: DOMContentLoaded
- IF you have code that depends on HTML elements being loaded, put it in the DOMContentLoaded

## element.addEventListener(type, callback)
- takes in a string for the name of the event, and a callback function to be invoked when the event happens
- (optional) argument for the callback is the event itself

## Review Callbacks!
- A callback is a function that is passed as an argument into another function
- .map(func)

## Practice
1. Refactor our code to generate our table of instructors based on a given array of data.
2. When I click on an "thead" <td>, the text color changes to red.
3. When I click on an "email" <td>, the text color changes to blue.
4. When I click on a row, the selected instructor appears in a div.


## Where do I put .addEventListener()
- Waited until the DOM is loaded, in that function, we add eventlisteners
- addEventListen WHEN you created that elements


## The event object
- `event.target` : the exact element that was clicked (triggered event)
`event.currentTarget` : the element that the event listener is attached to

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