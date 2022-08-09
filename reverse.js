let res = 0;
let number = 123456;
let digit;

while(number != 0){
  digit = number % 10;
  res = res * 10 + digit;
  number = Math.floor(number/10);
// number= number/10;
}

console.log("Revesre number of is :  "+res);