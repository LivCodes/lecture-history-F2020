`this`
- function invocation 
    - this => window object  
- method invocation
    - this => obj that called that method

# All the confusing parts of `this`
* indirect invocation
    * call(), apply()
    * call() => function()
    * apply() => function()

call is call a function and you pass an object


* bound function
    * bind
    
* arrow function
    * they do not create a new value for `this`
    * They use the value of `this` form the outer scope

* strict mode

## Essential Questions
* When and how is the binding of `this` determined?
* How do we explicitly define `what` this should be when invoking a function?
* When does `this` commonly lose its context and how can we guard against it?
* How is the binding of `this` determined for arrow functions?
* What is strict mode and how does it impact the binding of this?