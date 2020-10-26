# Scope 

## What is Scope?

Question 1: Reuben vs Maya, which one will print?
```
let teacher = "Reuben";

function lecture(){
  let teacher = "Maya";
  console.log(teacher);
}

lecture();
```

```
let teacher = "Reuben";

function lecture(){
  let teacher = "Maya";
  
  if (true) {
    let teacher = "Ann";
    console.log(teacher);
  }
  
}

lecture();
```

Question 2: In the block scope, what will print? Reuben or Maya?
```
let teacher = "Reuben";

function lecture(){
  let teacher = "Maya";
  
  if (true) {
    console.log(teacher);
  }
  
}
```
### Talk about Lexical Scope and the Scope Chain

```
let teacher = "Reuben";
let day = "Monday";

function lecture(){
  let teacher = "Maya";
  
  if (true) {
    console.log(teacher, day);
  }
  
}
```

```
let teacher = "Reuben";
let day = "Monday";

function lecture(){

  if (true) {
    console.log(teacher, day);
  }
  
}
```
### What will happen here?
```
function lecture(){

  if (true) {
    console.log(teacher, day);
  }
  
}
```

## Scope chaing only works one way:
```
let teacher = "Reuben";

function lecture(){
  let day = "Monday";
  console.log(teacher, day);
}

lecture();
console.log(teacher, day);
```


## Combining It All. What if there were two variables named teacher?

Question 3: What will print in the function scope, in the global scope?
```
let teacher = "Reuben";

function lecture(){
  let teacher = "Maya";
  console.log("function scope", teacher);
}

lecture();
console.log("global scope", teacher);
```

Question 4: Now, what will print in the function scope, in the global scope?
```
let teacher = "Reuben";

function lecture(){
  teacher = "Maya";
  console.log("function scope", teacher);
}

lecture();
console.log("global scope", teacher);
```

# var, let, and const
```
let teacher = "Reuben";

function lecture(){
  let teacher = "Maya";
  if (true) {
    let teacher = "Ann";
    console.log("block scope", teacher);
  }
  console.log("function scope", teacher);
}

lecture();
console.log("global scope", teacher);
```

```
var teacher = "Reuben";

function lecture(){
  var teacher = "Maya";
  if (true) {
    var teacher = "Ann";
    console.log("block scope", teacher);
  }
  console.log("function scope", teacher);
}

lecture();
console.log("global scope", teacher);
```

# Hoisting

```
var name = "Among Us";
console.log(name)

```

Question 5: What will get logged to the console?
```
console.log(name)
var name = "Among Us";
```

## Try with let

```
let name = "Imposter";
console.log(name)

```

Question 6: What will get logged to the console?
```
console.log(name)
let name = "Imposter";
```

# Hoisting works within local scopes as well!

