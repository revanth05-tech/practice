const prompt = require("prompt-sync")();
let str = prompt("Enter the Word : ");

let count = 0;
let vowels = "aeiouAEIOU";

for(let i = 0; i <str.length;i++){
    for(let j = 0;j<vowels.length;j++){
        if(str[i] == vowels[j]){
            count++;
            break;
        }
    }
}

console.log(`Vowels in the Given Word : ${count}`);