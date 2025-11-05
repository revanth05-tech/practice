const prompt = require('prompt-sync')();
let num = prompt('Enter the Number : ');

let arr = num.split('');
let i = 0, j = arr.length -1;

while(i < j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}

let reversed = arr.join('');
console.log("Reversed Number is : ",reversed); 