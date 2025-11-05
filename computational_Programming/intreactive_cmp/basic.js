const prompt = require('prompt-sync')();
let name = prompt('Enter Your Name : ');
let choice;
do{
 console.log('<<<< Intreactive Mode >>>>');
 console.log('1. Say Greetings');
 console.log('2. Talk');
 console.log('3. Say Good bye!!');
 choice = parseInt(prompt('Enter the Option :'));

  switch(choice){
    case 1:
      console.log(`Hi ${name},This is a program!`)
      console.log('its helps you to intreact with computer!!');
      break;
    case 2:
      console.log('qwertyuiopasdgfhjklzxcvbnm,qwertyuiopxdcvfghjkzxcvbnmwertuyiopasdfghjklzxcvbnm,qweryuiop1234567890-asdtyuiocvbnm');
      break;
    case 3:
      console.log(`Bye ${name},let's meet again!!`);
      break;

    default:
      console.log('Invaild Option!!');
  }
}while(choice !== 3)