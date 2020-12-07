# Constructor and Prototype 

## Object Creation Patterns
- literal `{}` syntax
- Factory pattern (template)

## `new` Object and Constructor Pattern
- new Array()
- new Object()
- properties / data
- methods / behavior

## `this`
- function invocation (window)
- method invocation (obj)
- constructor invocation (empty object)



### Practice making a Cellphone constructor

#### Properties
- phoneNumber (string)
- model (string)
- contacts (array)

#### Methods
- addContact(name, phoneNumber)
- numberOfContacts()
- lookUp(name)
- deleteContact(name)

```js
function Cellphone(number, model){ //constructor
  this.phoneNumber = number;
  this.model = model;
  this.contacts = [];
  this.addContact = function(name, number){
    this.contacts.push({name: name, number: number});
  };
  this.numOfContacts = function(){
    return this.contacts.length;
  }
}

let iphone = new Cellphone("1234567890", "iPhone")
//            {}.Cellphone()
let samsung = new Cellphone("1112223333", "Android")
```

## Prototype
- an instance is... 
* when there is a Teacher
* an object created using a constructor

## All functions have a prototype property
- access it using `.prototype`

## All instances have a prototype property
- access it using `.__proto__`

objects create through a construction 
function can access the function's 
prototype object via the __proto__ property.
