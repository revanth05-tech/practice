let str = "HelloWorld";
let vowels = "aeiouAEIOU";
let count = 0;

for(let i = 0;i<str.length;i++){
    for(let j = 0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
            count++;
            break;
        }
    }
}

console.log(`Number of Vowels in the string: ${count}`)