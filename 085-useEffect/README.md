# useEffect Hook
* [React Documentation](https://reactjs.org/docs/hooks-effect.html)

## Use Cases
The Effect Hook lets you perform side effects in functional components:
* Manual DOM manipulation (that you can't get with components)
* Manual Event Handlers
* Timers
* Fetching and AJAX

## Use
* **Feature:** Update the title tab of the page
* `useEffect()` is a function we invoke at the top level of a functional component
* Takes in a callback function
* We are telling React to run this callback function everytime the component updates

## Component "Lifecycle"
* Mounting
* Render (Re-Render)
* Unmounting

## Side effects and State Changes
By default, `useEffect` runs both after the first render (mounting) and after every re-render (state change)

## Depedency Updates
* What if we don't want it to run after _every_ update? That's expensive...
* The second argument we pass into `useEffect()` is a dependency array 
* What if we pass in an empty array???

  //mounts App -> useEffect -> setCount -> useEffect() -> setCount

  //pass in no array => All/Everything/Anything
  //pass in empty array => None

## Timers
* Since `useEffect`'s callback runs after every re-render, we can use `setTimeout` 
* It will "reset" itself every re-render, unlike `setInterval`

## Clean Up
* Sometimes in React, when you unmount a component, you want to run some "clean up" code
* `useEffect`'s callback function can _return another function_ that will be invoked when the component is unmounted