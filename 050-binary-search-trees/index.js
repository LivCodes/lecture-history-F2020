class BinarySearchTreeNode {
    constructor(value = null){
        this.value = value;
        this.left = null; 
        this.right = null;
    }
    
    find(searchNumber){ //return true if number is in our tree; false otherwise
        if(!this.value){
            return false;
        }
        if(this.value === searchNumber){
            return true
        }
        if(searchNumber < this.value){
            if(!this.left){
                return false;
            }
            return this.left.find(searchNumber)
        }
        if(searchNumber > this.value){
            if(!this.right){
                return false
            }
            return this.right.find(searchNumber)
        }
        
    }
    
    insert(number){ //assume that number is a integer
        if(!this.value){
            this.value = number;
        } else {
            if(number < this.value){
                if(!this.left){
                    this.left = new BinarySearchTreeNode(number)
                } else {
                    this.left.insert(number)
                }
            }else if(number > this.value){
                if(!this.right){
                    this.right = new BinarySearchTreeNode(number)
                } else {
                    this.right.insert(number)
                }
            }else{
                throw new Error("Cannot add duplicate to the tree")
            }
        }
    }
}

function print(node){
    if(node){
        print(node.left);
        console.log(node.value);
        print(node.right);
    }
}

let array = [50, 30, 80, 40, 90, 20, 70];

let tree = new BinarySearchTreeNode();
for(const number of array){
    tree.insert(number)
}

