# Queues

## What is a Queue?
- A queue is an abstraction.
- It is a list that only allows the user to process elements in a FIFO manner.

## Mental Model and Visualization

## Important Terminology
- FIFO (First In, First Out)
- enqueue (add element to the back of the list)
- dequeue (remove element from the front of the list)

## What can queues be used to model?
- getting into Poyeyes
- line at the super market
- line for iPhone 
- playlist!

## Different ways to implement a Queue 
- We need a list, what "list" data structures can we use?
    - LinkedList to model a queue
    - Array
- What are the run-time and space benefits of each approach?
    - arrays and singly linked lists can be slower (O(n))
    - - double linked list (O(1))
- What is the easiest approach?
    - use arrays 

## Queue methods
- size()
- isEmpty()
- enquque()
- dequeue()
- peek()



# Deque (pronouced Deck)
- Double-ended Queue; you can add and remove from both ends of the queue

## Dequeue Methods
- isEmpty()
- size()
- addToBack()
- addToFront()
- removeFromBack()
- removeFromFront()
- peekFront()
- peekBack()