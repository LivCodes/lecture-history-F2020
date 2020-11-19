// console.log("hello");


// function callback(accumulator, currentVal, index, array){
//     //accumulator IS an obj 
//     accumulator[currentVal] += 1;
//     return accumulator
// }


// let init = {"Reuben": 0, "Ann": 0, "Maya": 0}
// let singleVal = ["Reuben", "Ann", "Maya", "Reuben", "Ann"].reduce(callback, init)
// console.log(singleVal)

function compare(a, b){
    return a - b
}
// 0 means the values stay in place
// return < 0 , first element is less than b 
// return > 0 , first element is greater than b

const array = [7, 2, 1000000, 678, 1, 999]; //I want: [1, 3, 22]
array.sort(compare)

// array.sort((a, b) => a - b);







function teacherSort(a, b){
    if(a === "Reuben"){
        return -1 //make sure a comes first
    }else if(b === "Reuben"){
        return 1 //make sure b comes first
    }else{ //neither a or b were Reuben
        return 0
    }
}








const teachers = ["Ann", "Maya", "Ian", "Reuben", "Reuben"];
teachers.sort(teacherSort)
//define a sort method where Reuben is always first, the others don't matter
//keep the realtive ordering of all the other instructors