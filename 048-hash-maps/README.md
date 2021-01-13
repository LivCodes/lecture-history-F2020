# Hash Maps 
- A CS, theoretical topic

## A Hash Maps is an Abstract Data Type (ADT)
- ADT: A data type where the behavior is defined, but not the implementated 
- an idea to solve some problem 
- The problem they solve: 
 
Is ____ in this list?

## Scenario? Is "ann" a student in this list?
```
    ["elda", "denise", "bob", "rose", ...]
```

Typically, the answer to this question is linear run time O(n).

But needing to look up if something in a list is so common!

Is there a way we can make such a task constant run time O(1)?

That's where Hash Maps come in! 

## Hash Maps are like a table
- In most programming languages, a hash map is built on top of an array. 
- We store data in this table based on a **Hash Function** that will map each data to an index (integer).
- For each data, our Hash Function will generate a **Hash value** (integer to use as array index).
- We store each data at it's generated index.
- We can use the Hash Function to look anything up in (near) constant time!

## Example
- Create a hash function!
- Iterate through list to store everything in hash map!
- Now looking something up is constant time using the hash function 
- Is "ann" is our list? Is "bob" in our list?
- What about **collisions**?

## The JavaScript better way: OBJECTS
- Purpose of Hash Maps is to look up something in constant time! JS objects do that!



## Potential Interview Questions
- Duplicate Products (how many duplicate products are in this list)?
- A product is a duplicate if it has the same NAME and PRICE and WEIGHT
```
let items = [
    {name: "ball", price: 2, weight: 22}, 
    {name: "glove", price: 4, weight: 1}, 
    {name: "ball", price: 22, weight: 2}, 
    {name: "glove", price: 4, weight: 2}, 
    {name: "glove", price: 4, weight: 1}, //DUPLICATE
    {name: "box", price: 40, weight: 50}
]
```





- Find the "Intersection" of two linked list (all values present in both lists)

```
    list1 = "blue" -> "red" -> "green" -> "purple"
    list2 = "red" -> "yellow" -> "purple" -> "pink"
    Answer: ["purple", "red"]
```

// Iterate through list1 => {blue: 1, red: 1, green: 1, purple: 1}
// let answer = []
// Iterate through list2 =>
        hashMap["red"] = 1 (true)
        hashMap["yellow"] = undefined (false)
        hashMap[purple] = 1 (true)
        hashMap[pink] = undefined (false)
//return answer array 

## What now?
- Problem Sets
- Trees!!! (Codecademy)
- ...