let arr = [20,10,30,20,40,50,30,60,20,60];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}

console.log(`Largest: ${largest}`);
console.log(`Second Largest: ${secondLargest}`);
