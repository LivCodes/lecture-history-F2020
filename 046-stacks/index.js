class Stack {
    constructor(maxSize){
        this._stack = [];
        this.maxSize = maxSize;
    }
    
    size(){
        return this._stack.length;
    }
    
    isEmpty(){
        return this._stack.length === 0;
    }
    
    push(item){
        /*if the length is less then or equal to the max size*/
        if( this.size() < this.maxSize ){
            this._stack.push(item);
            return `${item} was pushed on top of the stack`
        } else {
            throw new Error("Stack Overflow")
        }
    }
    
    pop(){
        if(!this.isEmpty()){
            let removed = this._stack.pop()
            return `${removed} was popped from the top of the stack`
        } else {
            throw new Error("Stack Underflow")   
        }
    }
    
    peek(){
        return this._stack[this._stack.length - 1];
    }
}

let books = new Stack(4);
books.push("Harry Potter");
books.push("Eragon");
books.push("Milk and Honey")

