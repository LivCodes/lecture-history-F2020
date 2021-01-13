
function hashFunction(data){
    let obj = {a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26};
    let num = 0; 
    data.split("").forEach(letter => {
        num += obj[letter];
    })
    return num;
//        return Math.floor(Math.random() * 10)
}

let hashMap = {};
let array = ["elda", "denise", "bob", "rose"];
for(const name of array){
  hashMap[name] = name
}





let items = [
    {name: "ball", price: 2, weight: 22}, 
    {name: "glove", price: 4, weight: 1}, 
    {name: "ball", price: 22, weight: 2}, 
    {name: "glove", price: 4, weight: 2}, 
    {name: "glove", price: 4, weight: 1}, //DUPLICATE
    {name: "box", price: 40, weight: 50}
]


function hashFunction(obj){
    return obj.name + "," + obj.price + "," + obj.weight;
}

function duplicateProducts(array){
    let hashMap = {}
    array.forEach(item => {
        let key = hashFunction(item);
        if(! (key in hashMap)){
            hashMap[key] = 1
        } else {
            hashMap[key] += 1
        }
    })
    console.log(hashMap)
}

duplicateProducts(items)












