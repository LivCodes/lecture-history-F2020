```//indent blocks of code
function fizzBuzz() {
let counter = 1
while (counter <= 100){
if (counter % 3 == 0 && counter % 5 == 0){
console.log('fizzbuzz')}
else if (counter % 3 == 0){
console.log('fizz')}
else if (counter % 5 == 0){
console.log('buzz')}
else {console.log(counter)}
counter = counter + 1}
}
```


```//single space around operators and blocks
for(let num=0;num<10;num++){
  if(10%num==0){
    console.log(`10 is evenly divisible by ${num}`);
  } 
}
```


```//Problem: If the number is even divisble by 3, return 'Fizz'; Otherwise, return the number.
function fizz(num){
  if (num % 3) {
    return 'Fizz';
  } else {
    return num;
  }
}
```


```//Problem: If the weather is "sunny", return "Go outside..."; Otherwise, return "Stay home..."
function checkWeather(weather){
  let decision;
  if (weather = "sunny") {
    decision = "Go outside!";
  } else {
    decision = "Stay home...";
  }
  return decision;
}
```


```//Problem: Add up all the numbers in an array.
function getTotal(numbers){
    let runningTotal = 0;
    for (let i = 0; i < numbers.length; i++) {
        runningTotal++;
    } 
    return runningTotal;
}
```


```//Problem: Print all event numbers from 2 to 20.
function printEven(){
    for (let i = 0; i <= 20; i + 2) {
        console.log(`${i} is even.`);
    }
}
```


```//Problem: Find all numbers 1-9 that is 18 is divisible by.
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

