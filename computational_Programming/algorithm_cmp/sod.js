const prompt = require('prompt-sync')();

let num = parseInt(prompt('Enter the number: ')); 
let sum = 0;

if (num <= 0) {
  console.log("Enter a number greater than 0");
} else {
  while (num > 0) {
    let temp = num % 10;
    sum += temp;
    num = Math.floor(num / 10);
  }
  console.log("Sum of Digits:", sum);
}
