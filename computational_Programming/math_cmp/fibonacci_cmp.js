// // without Rescursive method
// function fibbonaci(n){
//     let a = 0,b = 1;
//     console.log(a);
//     if(n>1) console.log(b);
//     for(let i = 2;i<=n;i++){
//         let temp = a + b;
//         console.log(temp);
//         a = b;
//         b = temp;
//     }
// }

// fibbonaci(7);

// with Recursive method

function fibbonaci(n){
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibbonaci(n-1) + fibbonaci(n-2);
}

let n = 7;
for(let i=0;i<n;i++){
    console.log(fibbonaci(i));
}