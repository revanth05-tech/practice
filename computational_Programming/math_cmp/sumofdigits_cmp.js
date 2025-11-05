const prompt = require('prompt-sync')();

let num = prompt("Enter the number : ");
let sum = 0;

while(num > 0){
    let last_num = num % 10;
    sum += last_num;
    num = Math.floor(num/10);
}

console.log(`Sum is ${sum}`);