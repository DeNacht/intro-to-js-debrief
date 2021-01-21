//GenBuzz
var myNumber = 60;

if (typeof myNumber !== "number") {
    console.log("This is not a number");
}else if(myNumber%15 === 0){
    console.log('GenBuzz');
}else if(myNumber%3 === 0){
    console.log('Gen');
}else if(myNumber%5 === 0){
    console.log('Buzz');
}else{console.log(myNumber);}

//E-Commerce Item List
let item = 'shoes';

switch (item) {
    case 'shoes':
      console.log('Shoes are $50');
      break;
    case 'jeans':
      console.log('Jeans are $25');
      break;
    case 'socks':
      console.log('Socks are $2');
      break;
    default:
      console.log('Invalid item');
      break;
  }

  //Random Integer
function getRandomInt(min, max) {
    min = Math.ceil(50);
    max = Math.floor(100);
    console.log(Math.floor(Math.random() * (max - min) + min)); 
}
getRandomInt();