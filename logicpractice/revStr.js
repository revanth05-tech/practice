// let a = "Hello World!";
// let b = "";
// for(let i = a.length -1;i>=0;i--){
//     b += a[i];
// }
// console.log(b);


const prompt = require("prompt-sync")();

let str = String(prompt("Enter the String: "));

let rev = "";

for(let i = str.length -1;i>=0;i--){
    rev+= str[i];
}

console.log("Reversed String is: "+rev);