# Recursion

## What is Recursion? Let's ask Google...
- Recursion is a method of solving a problem where a function calls on itself repeatedly.
- This is because the solution depends on solutions to smaller instances of the same problem.
- Divide the problem into the same sub-problems.

## Iterative Example (looping) in the real world
- Question: How many people are in line front of me?

## Recurion Example in the real world
- Question: How many people are in line front of me?
- The answer is: the answer for the same question for the person in front of me, but plus 1.
- Base Case: if there is no one in front of me, the answer is 0.
- "The Rule": I need to add 1 to get the number of people in front of me

## Strategry
- Understand the problem (P in PEDAC) 
- Sometimes it's easier to start with (and test) the base case!
- Then write out the "rule" or logic that depends on the smaller answer.
- [Visualize your code](http://pythontutor.com/visualize.html#mode=edit)

## Problem 1: Find the length of a Linked List given the first node 
- Base Case: if null, then length is 0
- Rule: the length is whatever the next node's length is plus 1

## Benefits and Drawbacks of Recursion?
- Takes up more space and is slower!
- But the benefits are: tool for the developer
    - Make you look smart!
- Becareful of infinite loops

## Problem 2: Check if a string is a palindrome
- Base Case: If our string is 0 chars or if its 1 char, 
- Rule: 
if the substring is a palindrome and the first and last letters is the same, then we have palindrome
if the substring is a palindrome and the first and last letters arn't the same, then we return false

- Test Cases: "a", "dad", "abba", "cool"
