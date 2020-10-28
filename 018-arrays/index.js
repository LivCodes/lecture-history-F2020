//primitive data types: pass by value 

let original = 10;

function double(num){
    num = num * 2;
    return num;
}

let copy = double(original);
console.log("copy is", copy);
console.log("original is", original);


//non-primitive data types: pass by reference

let ogArray = [10];

function doubleArray(arr){
    arr[0] = arr[0] * 2;
    return arr;
}

let copyArr = doubleArray(ogArray);
console.log(copyArr);
console.log(ogArray);


