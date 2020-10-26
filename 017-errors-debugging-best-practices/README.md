## Best Practicies

### White spacing is your friend
* Use tabs to indent each block of code 
* Use spaces to improve readability. 

### Naming Convention
* snake_case
* camelCase

### Mark Down
* Use `` to create an in-line code snippet
* Use ``` to create a block code snippet
* Preview in AWS and in Github



## Reading Error Messages
* In coding, it's called "throwing an error"

#### ReferenceError
Creates an instance representing an error that occurs when de-referencing an invalid reference.
* Scoping problems

#### SyntaxError
Creates an instance representing a syntax error.
* Structural Problems
* Redeclaring something you can't redeclare

#### TypeError
Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.
* Invoking something that is not a function 
* Reassigning something you can't reassign



## Debugging with console.logs
* Why is it called a 'bug'?
* Check your assumptions

* reading error message AND the line it's on (a couple of examples)
* if statement checking to make sure you get to the right branch
    * age = 18 as opposed to age == 18;
* loop running total is not working
* loop incrementer is flawed 


```
function getTotal(numbers){
    let runningTotal = 0;
    for (let i = 0; i < numbers.length; i++) {
        runningTotal++;
    } 
    return runningTotal;
}

let sum = getTotal([2, 4, 6]);
console.log(sum);
```


```
function printEven(){
    for (let i = 0; i <= 20; i + 2) {
        console.log(`${i} is even.`);
    }
}

printEven();
```

```
var num = 18;
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  var factor;
  var divisor = numbers[i];

  if (num % divisor === 0) {
    factor = true;
  }

  if (factor) {
    console.log(`${divisor} is a factor of ${num}!`);
  }
}
```

