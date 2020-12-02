# `this`
- access the object that we are working on
- this.contacts.push

`this` will reference the execution context

### `this` in the Global scope
* Execution Context (Running Environment)

## global object / globalThis
- decalre global variables with var 
- create global variables in a scope

- global variables decalred with let or const are NOT added to the global obj

### The Global Object
* And how does it relate to global variables??
* globa variables are properties that are stored on the global object 



`this` - WHAT object are you call this function from?
- varies based on HOW to invoked the function


### `this` in a function/method
* function invocation
    * is the window object 
* method invocation
    * is the object that called the method 

### What is an Execution Context?
* Mental model
* When and how is the binding of `this` determined?

### JS runs into two phases
- creation/compilation
- execution 