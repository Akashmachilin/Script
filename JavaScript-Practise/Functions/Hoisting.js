//var is undefined it is hoisting
//let & const is not hoisting it should be initizaioning before decarling
//They both are TDZ= Temporal Dead Zone


console.log(a);
var a = 10;
console.log(a);

console.log();
let b = 30;
console.log(b);

console.log();
const c = 20;
console.log(b);

//Function Declaration
//Hoisting is done only in named function

sample();
function sample() {
  console.log("I am There");
}
