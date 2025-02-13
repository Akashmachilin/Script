

//let differnce in variables

let input;                   //runs without initialize
input=5;

//let input=10;               //Cannot Redeclare

if (true){                    //Redeclare is possible in scope and take a varliable for inside scoop
    let input=20;
    console.log(input);  
}
console.log(input);

function test(){
    let input = 10;
    console.log(input);    
}
test()
console.log(input)

//Difference In Object

let obj;
obj={name:"akash"};
if (true){
    let obj={name:"maxsee"}
    console.log(obj);   
}

function test(){
    let obj={name:"maxsee"}
    console.log(obj);
    
}
test()
console.log(obj)