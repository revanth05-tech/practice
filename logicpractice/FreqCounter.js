let str = "mahadev";
let freq= {};


for(let i = 0;i <str.length;i++){
    let ch =  str[i];

    if(freq[ch]){
        freq[ch] += 1;
    } else {
        freq[ch] = 1;
    }
}
console.log(freq);
