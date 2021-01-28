# Timers

## Asynchronous vs Synchronous Code 
* Synchronous code runs one thing at a time, in a predictable order. Ex?
* Asynchronous codes runs when it can, in no gauranteed order. Ex?
* JS can only do one thing at a time, so how does that work?

## JS Engine
- Heap (memory allocation)
- Call Stack (execution order)
- **Web APIs**
- **Callback Queue**
- **Event Loop**

## setTimeout()
- Has at least two arguments: 
    * a callback function to execute after some delay 
    * number of milliseconds for the delay
    * Zero or more arguments to pass into the callback
- Returns a timer ID 

## setInterval()
- Has at least two arguments: 
    * a callback function to execute periodically after a fixed delay 
    * number of milliseconds for the delay
    * Zero or more arguments to pass into the callback
- Returns a timer ID 

## clearTimeout() and clearInterval()
- Has an argument of a timer ID to stop

## Fun Features to Build
- In 5 seconds, surprise the user with an bunch of obnoxious gifs
- Have the page count down when the suprise will happen 
- Add a button so the user can stop the madness