const prompt = require("prompt-sync")();

let str = String(prompt("Enter the String: "));
let rev = "";

for (let i = str.length - 1;i>=0;i--){
    rev += str[i];
}

console.log("Reversed String is: " + rev);


if(rev === str){
    console.log("It is a Palindrome");
}else{
    console.log("It is not a Palindrome");
}