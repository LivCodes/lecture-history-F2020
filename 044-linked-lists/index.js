class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }
    
    addToTail( data ){ 
        //make a new node
        let newNode = new Node(data)
        if(!this.head){        //what if there are no nodes in the list, 
            this.head = newNode;
        }else{         //what is there are already some nodes, add the node to the tail
            let currentNode = this.head
            while(currentNode) { // iterate starting from the head and going until next node is null
                if(currentNode.next === null){
                    currentNode.next = newNode;
                    return newNode
                } 
                currentNode = currentNode.next
            }
        }
    }
    
    addToHead( data ) {
        //add a new node to the head 
        let oldHead = this.head
        let newHead = new Node(data)
        this.head = newHead
        newHead.next = oldHead
    }
    
    insertAtIndex(data, index){
        //count = 0
        //until count === index
        //start at the head, loop thorugh until I'm at index
    }
    
    deleteHead(){
        //constanct run time
    }
    
    deleteTail(){
        
    }
    
    printList(){
        //start at this.head, console.log curentNode.data
    }
    
    length(){
        return this.length
        //count each node, starting with the head, until...we reach null Node
    }
}


let list = new LinkedList()
list.addToTail("Reuben")
list.addToTail("Ann")
list.addToTail("Erwins")
list.addToHead("Maya")