// let arr = [10,20,30,20,10,40,50,40,60,50];
// let unique = [];

// for(let i = 0;i<arr.length;i++){
//     if(!unique.includes(arr[i])){
//         unique.push(arr[i]);
//     }
// }
// console.log(unique);

let arr = [10,20,10,30,20,40,50,30,60,20,60];
let unique = [];

for(let i = 0;i< arr.length;i++){
    let found = false;

    for(let j = 0;j<unique.length;j++){
        if(arr[i] === unique[j]){
            found = true;
            break;
        }
    }

if(!found){
    unique.push(arr[i]);
 }
}

console.log(unique);