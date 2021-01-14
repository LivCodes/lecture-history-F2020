# Binary Search Trees
- where ALL left decendants are less that the node 
- ALL right decents are greater than the node
- Best when your data source is average spaced out, random

### Let's play a guessing game
- I'm thinking of an integer from 1 to 10 (inclusive).
- Your goal is to guest that exact integer in the fewest amount of trys.
- If you're wrong, I'll tell you in you are too high or too low.

## Throwback
* What is the run time for searching for something in a sorted array?
    * O(log n)
* What if we want to insert things to a sorted array?
    * O(n)

## Accumulating data and searching through data are so common
* Can we make it better?
* Yes! With Binary Search Trees

## Why are we learning about Binary Search Trees?
- Interviews
- They are an alternative to sorted arrays
- Binary Search Tree have same O(log n) search run-time as arrays 
- But they have better insertion and deletion time 
    - ON AVERAGE, O (log n) 
    - O(h) where h is the average height of the tree

### Setting up our Binary Search Tree
- Given this array = [50, 30, 80, 40, 90, 20, 70]
    - interate through this array 
    
    - first node you write, should be 50
    - then insert 30, 80, 40, 90, then 20
    - last node you insert, should be 70
    

- Given an array = [20, 30, 40, 50, 70, 80, 90]

### Inserting all nodes
- Iterate through the loop

### Searching nodes
