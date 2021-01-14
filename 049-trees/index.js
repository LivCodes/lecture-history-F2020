class BinaryTree { //TreeNode
    constructor(value = null){
        this.value = value; //any data type
        this.left = null; //instance of BinaryTree
        this.right = null; //intance of Binary Tree
    }
    
    setLeftChild(data){ // data is a string or maybe it's a BinaryTree
        if(data instanceof BinaryTree){
            this.left = data
        } else {
            //data is string
            this.left = new BinaryTree(data)
        }
    }
    
    setRightChild(data){ 
        if(data instanceof BinaryTree){
            this.right = data
        } else {
            this.right = new BinaryTree(data)
        }
    }
}

let reuben = new BinaryTree("Reuben");
let ann = new BinaryTree("Ann");
let maya = new BinaryTree("Maya");

reuben.setLeftChild(ann); 
reuben.setRightChild(maya); 
ann.setLeftChild("Erwins");
ann.setRightChild("Carmen");
maya.setLeftChild("Motun");
maya.setRightChild("Travis")

//node is an instance of BinaryTree
function preorder(node){
    if(node){    
        //print the current value
        console.log(node.value)
        
        //print left subtree
        preorder(node.left);
        
        //print right subtree
        preorder(node.right)
    }
}

function postorder(node){
        if(node){    
        //print left subtree
        postorder(node.left);
        
        //print right subtree
        postorder(node.right)
        
        //print the current value
        console.log(node.value)
    }
}

function inorder(node){
        if(node){    
        //print left subtree
        inorder(node.left);
        
        //print the current value
        console.log(node.value)
        
        //print right subtree
        inorder(node.right)
    }
}

inorder(reuben)




























// let root = new Tree("Founder");
// let scammer1 = new Tree("Scammer1");
// let scammer2 = new Tree("Scammer2")
// let scammer3 = new Tree("Scammer2")
// root.addChild(scammer1)
// root.addChild(scammer2)
// root.addChild(scammer3)
// let litteScammer = new Tree("little scammer")
// scammer1.addChild(litteScammer)