const prompt = require("prompt-sync")();

let str = String(prompt("Enter the String: "));
let isPalindrome = true;

for(let i = 0;i<str.length/2;i++){
    if(str[i] !== str[str.length -1 -i]){
        isPalindrome = false;
        break;
    }
}

if(isPalindrome){
    console.log("Plaindrome");
}else{
    console.log("Not Palindrome");
}