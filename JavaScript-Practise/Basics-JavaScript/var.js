
//var differnce in variables

var input;                   //runs without initialize
input=5;
var input=50;
if (true){
    var input=10                           //Redeclare is possible
    var input=100                          //In scope declare is possible and change the output to 10 
    console.log(input); 
}
console.log(input);

function test(){
    var input=30;
    console.log(input);
}
test()
console.log(input)






//Difference In Object

var obj;
obj={name:"akash"};
var obj={name:"raczee"};
// if(true){
//     var obj={name:"maxsee"}
//     console.log(obj);
// };
// console.log(obj)

function test(){
    var obj={name:"maxsee"}
    console.log(obj);    
}
test()
console.log(obj)