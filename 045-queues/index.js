class Deque {
    constructor() {
        this._elements = [];
    }
    
    size() {
        return this._elements.length;
    }
    
    isEmpty() { 
        return this.size() === 0;
    }
    
    addToBack(thing) {
        this._elements.push(thing)
        return `${thing} was added to the back our queue`
    }
    
    addToFront(thing){
        this._elements.unshift(thing);
        return `${thing} was added to the front of the queue`
    }
    
    removeFromFront() {
        if (!this.isEmpty()) {
            let removed = this._elements.shift();
            return `${removed} was removed from the queue`
        } else {
            throw new Error("Queue is empty. Cannot dequeue")
        }
    }
    
    removeFromBack() {
        if (!this.isEmpty()) {
            let removed = this._elements.pop();
            return `${removed} was removed from the queue`
        } else {
            throw new Error("Queue is empty. Cannot dequeue")
        }
    }
    
    peekFront() {
        return this._elements[0];
    }
    
    peekBack(){
        return this._elements[this._elements.length - 1]
    }
}

let appleStore = new Deque();
console.log(appleStore);
appleStore.addToBack("Ann");
appleStore.addToBack("Reuben");
appleStore.addToBack("Maya");

// class Queue {
//     constructor() {
//         this._elements = [];
//     }
    
//     size() {
//         return this._elements.length;
//     }
    
//     isEmpty() { 
//         return this.size() === 0;
//     }
    
//     enqueue(thing) {
//         this._elements.push(thing)
//         return `${thing} was added to our queue`
//     }
    
//     dequeue() {
//         if (!this.isEmpty()) {
//             let removed = this._elements.shift();
//             return `${removed} was removed from the queue`
//         } else {
//             throw new Error("Queue is empty. Cannot dequeue")
//         }
//     }
    
//     peek() {
//         return this._elements[0];
//     }
// }

// let appleStore = new Queue();
// console.log(appleStore);
// appleStore.enqueue("Ann");
// appleStore.enqueue("Reuben");
// appleStore.enqueue("Maya");
