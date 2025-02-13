

//Asynchronous

function f1(){
    console.log("First");  
}

function f2(){
    console.log("Second");  
}

function f3(){
    console.log("Third");  
}
f1();
setTimeout(f2,2000);
f3();



// async function welcome (){
//     return "hello worlds";   
// }
// console.log(welcome());

// welcome().then((result) => {
//     console.log(result);
    
// }).catch((err) => {
//     console.error(err);   
// });