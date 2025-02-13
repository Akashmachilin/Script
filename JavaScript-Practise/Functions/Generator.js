//Generator
function* generatorFunction() {
  yield "First Val";
  yield "Second Val";
  yield "Third Val";
  return "Final val";
}
let generator = generatorFunction();
console.log(generator.next().value);
console.log("I am executing after yeild statement");


// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);

// function* url() {
//   yield "http:/";
//   yield "www.penindia.com/";
//   yield "homepage";
// }

// let website = url();
// console.log(website.next().value);
// console.log(website.next().value);
// console.log(website.next().value);
// console.log(website.next().value);
