// Factorial of a number using Iterative Approach
// function factorial(n){
//     let result = 1;
//     for(let i = 1;i<=n;i++){
//          result *= i;
//     }
//     return result;
// }

// console.log(factorial(5));

// Factorial of a number using recursive Approach

function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(5));
