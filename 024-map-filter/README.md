# Review of Higher Order Functions

## Mental Model
- We are used to doing work on data
- Now, we are doing work on functions
- Real life example?

## Map
* A classic use case in programming is the ability to transform data! 
* ![moving square](https://www.mathwarehouse.com/animated-gifs/images/transformations/animation-translation-of-square-demo.gif)
* "Map" is used to map one piece of data to another piece of data in a 1-to-1 relationship
* Map as a mental model

# Alogrithm for map()
* It is a Higher Order function! gets a function as an argument/parameter
* map DOES work on some data and DOES work on a function
* returns a new array
* Every element in the new array was tranformed using the original element and the function


```js

let array = [1, 2, 3]

function plusFive(num){
    return num + 5;
}

map(array, plusFive);
//returns [6, 7, 8]


```