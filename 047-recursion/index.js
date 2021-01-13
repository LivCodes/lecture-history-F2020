function isPalindrome(str){ //return true or false
    if(str.length <= 1){
        return true;
    }
    let substring = str.slice(1, str.length - 1);
    if(str[0] !== str[str.length - 1]){
        return false;
    }
    return isPalindrome(substring);
}


//- Test Cases: "a", "dad", "abba", "cool"

// class Node {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }



// //Iterative is faster, less space
// // function findLength(node){
// //     let counter = 0;
// //     while(node !== null){
// //         counter += 1;
// //         node = node.next;
// //     }
// //     return counter;
// // }

// //Recursive; be less code; easier to read; 
// function findLength(node){
//     return findLength(node) + 1;
// }





// let ann = new Node("Ann");
// let reuben = new Node("Reuben");
// let maya = new Node("Maya");
// ann.next = reuben;
// reuben.next= maya;

// console.log(findLength(ann));