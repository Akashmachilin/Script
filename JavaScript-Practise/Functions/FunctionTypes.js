//Named Function
function add(uName) {
  console.log("Named function" + " " + uName);
}
add("Learning");

//Anonyomous Function

let annanFun = function (a, b) {
  console.log("Anonymous Function" + " " + a * b);
};
annanFun(10, 20);

//Arrow Function

let fatArrow = (a, b) => console.log("Arrow Function" + " " + a * b);
fatArrow(20, 30);

let fatArrow2 = (uNmae) => console.log("Arrow Function" + " " + uNmae);
fatArrow("Without Parameter and parenthesises");

//Returning value in Arrow function

let firstName = "Akash";

let fatArrow1 = (fname) => fname;
let finalOutput = fatArrow1(firstName);
console.log(finalOutput);

//Higer Order Function

function function1() {
  console.log("I am Higher Order Function");
}

function function2() {
  console.log("I am Call Back Function");
}

function1(function2());
//Calling a function1 and in parameter calling function2 is know as callback function
//Function1 is know as higer order function

//CallBack Funciton

function add(callback, a, b) {
  console.log(a + b);
  callback(1000, 200);
}

function sub(num1, num2) {
  console.log(num1 - num2);
}

add(sub, 100, 200);
