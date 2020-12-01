function petFactory(n, t){
  return {
    name: n,
    health: 100,
    hunger: 0,
    happiness: 50,
    type: t,
    age: 0,
    alive: true,
    eat: function(){
      console.log("Yummy yummy")
      this.health += 5;
      this.hunger += 10;
      this.happiness += 20
    },
    haveBirthday: function(){
      this.age += 1;
      if(this.age === 10){
        this.alive = false;
        console.log(`${this.name} has passed. BUt they had a great life!`)
      }else{
        console.log(`Happy Birthday! You are ${this.age}`)
      }
    },
    sleep: function(){
      console.log("Catching some zzzz's");
      this.health += 20;
      this.hunger -= 2;
    },
    work: function(){
      console.log("Why am I working? I'm a pet...")
      this.happiness -= 15;
    }
  }
}

let spark = petFactory("Spark", "fire")
let thor = petFactory("Thor", "water")
console.log(spark)
console.log(thor)









