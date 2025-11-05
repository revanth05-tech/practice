const prompt = require('prompt-sync')();
let name = prompt('Enter the Name: ');

let playagain;
let attempts;
do{
  let num=Math.floor(Math.random() * 10) +1;
  attempts = 0;
  let guess;
  do{
    guess = parseInt(prompt('Enter the Number : '));
    attempts++;

    if(guess < num){
      console.log(`${name},${guess} is lower than Actual Number`);
    }else if (guess > num){
      console.log(`${name},${guess} is higher than Actual Number`);
    }else {
      console.log(`Yes,${guess} is the correct answer ${name}`);
    }
  }while(guess !== num);

  playagain = prompt(`Do you want to Playagain ${name} :(y/n)`).toLowerCase();
}while(playagain === 'y');

console.log(`Thanks for playing ${name}!`);