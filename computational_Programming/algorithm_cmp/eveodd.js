const prompt = require('prompt-sync')();
let num = parseInt(prompt('Enter the number: '));
let sum = 0;
if(num <= 0){
  console.log('Please Enter Greater than 0');
}else{
 while(num > 0){
  let temp = num %10;
  sum += temp;
  num = Math.floor(num/10);
 }
 console.log("Sum of Digits : ",sum);
}

if(sum%2 === 0){
    console.log("Sum of Digits is Even");
}else{
    console.log("Sum of Digits is Odd");
}


