# AJAX Patterns

* When some event => Make a fetch request => Manipulate the DOM

## Pessimistic Rendering 
* Think worse cast scenario / distrusting 
* Make a fetch call to the Server => Wait for successful response => Then update the web page

## Optimistic Rendering
* Thining everytign will work out
* Make the updates to the webpage before waiting for the server's response
* Make a fetch call to the Server => while while for the server response, we make our DOM changes => get the resposne back from the server

## AJAX Code Structure

## Async Await Pattern

## Create a generic fetch function
* Takes in a dynamic URL and options  
* Returns a promise for the developer to do as they please

## Create a FetchRequest class!
* You can make a static class method
* You can make instances and instantiate them with `url` and `options` properties. 