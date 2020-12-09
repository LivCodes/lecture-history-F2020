//Animal Shelter

class Animal {
  constructor(name, age, breed, sex, type){
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.sex = sex;
    this.isAdpoted = false;
    this.numOfVetVisits = 0;
    this.type = type;
  }
  
  getsAdopted(){
    this.isAdpoted = true
    console.log(`${this.name} found their forever home`)
  }
  
  changeName(newName){
    this.name = newName;
  }
  
  vetVisits(){
    this.numOfVetVisits++;
  }
}


class Dog extends Animal {
  constructor(name, age, breed, sex){
    //Animal's constructor()
    super(name, age, breed, "M", "dog")
  }
  
  getsAdopted(){
    console.log(`${this.name} is so happy to get adopted. They are wagging their tail so hard.`)
  }
  
  bark(){
    return `${this.name} is barking`
  }
}
 
class Cat extends Animal {
  constructor(name, age, breed, sex){
    //invoke Cat's contructor
    super(name, age, breed, "F", "cat")
  }
  
  mayhem(){
    return `${this.name} is making a mess`
  }
}

//instance 
//fido IS-A Dog
//fido IS-A Animal

let tom = new Cat("Tom", 3000, "Tabby")
let fido = new Dog("Fido", 3645, "Pitbull")
let racky = new Animal()
console.log(fido)
console.log(tom)
