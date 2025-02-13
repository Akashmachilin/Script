//IIFE- Immediately invoked function expression

// function uName() {
//   console.log("Self Invoked");
// }
// uName()(

//Normal Function

(function (userName, age) {
  console.log("IIFE", userName + " " + age);
})("Akash", 45);
//IIFE Function

/*
//Closure

function outerFunction (){
    let outerVariable= "I am from Outer scope"
    function innerFunction(){
        console.log(outerVariable);   
    }
    return innerFunction
}
let innerfun=outerFunction()
innerfun()

*/
