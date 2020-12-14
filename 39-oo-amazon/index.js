class User {
    constructor(username, email, isPrime = false){
        this.username = username;
        this.email = email;
        this.cart = new Cart(this.username);
        this.isPrime = isPrime;
    }
    
    upgradeToPrime(){
        if(this.isPrime) { // user already has a Prime membership
            return `${this.username} is already a prime member`
        } else {
            this.isPrime = true;
            return `${this.username} is now a prime member`
        }
    }
    
    addItem(item, quantity = 1){ // Item instance, number
        // add item however many times we want
        // push item into the user's cart's items array
        for(let i = 0; i < quantity; i++){
            this.cart.items.push(item)
        }
        return `${item} has been added ${quantity} times`
    }
}

class Cart {
    constructor(owner){
        this.items = [];
        this.owner = owner //instance of User??? or string
    }
    
    numOfItems(){
        return this.items.length 
    }
    
    getTotalPrice(){
        return this.items.reduce((total, item) => {return total + item.price}, 0)
    }
}

class Item {
    constructor(name, price, description){
        this.name = name;
        this.price = price;
        this.description = description;
    }
    
    toString(){
        return this.name
    }
}


// Test Data 
console.log("Welcome to Amazon!")
let ann = new User("annduong", "ann@marcylabschool.org")
let maya = new User("mayab", "maya@marcylabschool.org", true)

let faceMask = new Item("Face Mask, 20 pact", 3.25, "Best value face masks");
let lights = new Item("RBG lights", 19.99, "16 million colors");
let petFood = new Item("Pedigree", 15.50, "Best food for your dog!");
let phoneCase = new Item("IPhone 12 light-weight case", 11.01, "The latest and greatest case")

ann.addItem(petFood, 3)
ann.addItem(faceMask, 2)
