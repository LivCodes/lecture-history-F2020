# Trees
- A recrusive data struture
- What can trees in computer science be used for?
    - * Family Tree  
    - * companies positions
    - * Pyramid Schemes
    - * any non-linear relationship
- Fun Example: 
    - Founder 
    - Head Scammers
    - Little Scammers

## Mental Model
- Wide trees 
- Deep trees

## Modeling a generic tree 
- Root node (parent node)
- Data/Value
- Reference to children nodes

## Binary Trees 
- A Binary Tree is like a node with two pointers instead of 1.
- Zero to two children (a right child and a left child)
- Every "node" _is_ itself a binary tree!

## Create a Binary Tree class 
- contructor
- setLeftChild(data)
- setRightChild(data)

## Traversal entire tree!!! 
- Using recursion!!!!

### Pre-order
* print the current data BEFORE
* print the left subtree
* print the right

### Post-order
* print left subtree
* print right subtree
* print the current data AFTER 

### In-order 
* print left subtree first 
* print the current data 
* print right subtree last
