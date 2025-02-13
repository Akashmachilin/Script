//let differnce in variables

const input = 5; // cannot run without initialzile
//const input=10;          //Cannot Redeclare

if (true) {
  const input = 10; //Redeclare is possible in scope and take a varliable for inside scoop

  console.log(input); //Redeclare is possible in scope
}
console.log(input);

function test() {
  const input = 60;
  console.log(input);
}
test();
console.log(input);

//Difference In Object

const obj = { name: "akash" };
//const obj={name:"maxsee"}
if (true) {
  const obj = { name: "maxsee" };
  console.log(obj);
}
console.log(obj);

function test() {
  const obj = { name: "Maxzee" };
  console.log(obj);
}
test();
console.log(obj);
