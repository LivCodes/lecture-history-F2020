## Summary of last lecture
- Object oriented programming
- **data properties** (state)
- **methods** (behavior)
- acessor properties
  - have are methods and act like data properties

### What are factory functions and why are they useful?
- don't have to hard-code data 
- use this object as a template


### Object Oriented Design!!
- Let's build a Tamagotchi (virtual pet) factory function!

# Properties (noun)
- name
- hunger (number)
- health (number)
- happiness (number)
- type (water, fire)

- age
- alive (boolean)

# Behavior (verbs)
- eat
- haveBirthday //change age, maybe alive boolean
- play
- sleep 
- poop
- makeChildren
- work


















function playerFactory(fName, lName){
  return { //template
    firstName: fName,
    lastName: lName,
    benched: false,
    _points: 0,
    
    scorePoints: function (point){
      this._points += point;
    },
    
    get points(){
      return this._points
    },
    set points(val){
      if(val > 0){
        this._points = val;
      }
    },
    get fullName(){
      return `${this.firstName} ${this.lastName}`
    },
    set fullName(str){
      let arr = str.split(" ")
      this.firstName = arr[0];
      this.lastName = arr[1];
    }
  }
}


Create a shopping list
properties
storeName
items
moneySpent

behavior 
addItem
getItemCount
buyItem
askPrice

Create a single object first

Then Make function factory