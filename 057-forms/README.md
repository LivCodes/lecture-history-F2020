# Forms

## Review'
* There's a `form` element in our HTML. Check it out and review forms. 
* When <some> event happens on <some> DOM element, we manipulate the DOM in <some> way

* Goal: As a user, I should be able to fill out and submit the form to add an instructor to our table, and then the form inputs will clear out.

* When <submit> event happens on <form> DOM element, we manipulate the DOM <tbody> to have a new <tr> (addInstructor())


## Forms and event handlers
- Listen for a `submit` event!
  * Remember, we can add event listeners after the DOM has loaded or when we create the element!
- Prevent default behavior using `event.preventDefault()`
- Accessing individual input elements
- Accessing values with `.value` attribute

## More about the value attribue!
- the `value` attribute determines what value is currently in the input

## Why input type submit is better than button
- input type="submit" listens for the Enter keypress

## Different Input types
* "text"
* "submit"
* "checkbox" (.checked to get a boolean)
* "radio"
* "number"
* "button"
* "password"
* "date"
* and many more 

## Form validation
- accept the form only if it's filled out properly!

## Miscellaneous Topics
- [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

## Creating webpages moving forward
- You are allowed to edit `index.html`, `index.js`, `styles.css`, everything!
- Have fun with the JS events Lab. Hide me easter eggs and I'll see how many I can find!
