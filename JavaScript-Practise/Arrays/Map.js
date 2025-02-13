//MAP
/*
fruits.map( function(currentEle, index, totalArr){
    console.log( currentEle, index, totalArr );
}  )

let newAr = fruits.forEach( (cElement)=>{
    console.log( cElement.toUpperCase() );
    return cElement
} )

console.log( newAr );

let new1 = fruits.map( (cElement, index)=>{
    return { id: index+1 , fruit : cElement }
} )

console.log( new1 );

//Chaining method

let newArr = fruits.map(  cEle => cEle.toUpperCase() ).sort().fill( "123" )

console.log( newArr );

let newArr1 = fruits.forEach(  cEle => cEle.toUpperCase() ).sort().fill( "123" )

console.log( newArr1 );

//Condition based Statement

let newArr2 = fruits.map(  (cEle) =>{ return cEle=="Apple" }  )

console.log( newArr2 );

fruits.forEach( val => console.log( val=="Apple" ) 



const number=[1,2,3,4,5,6,7,8,9,10];
let sqrt=number.map(value=>{
    return Math.sqrt(value).toFixed(3);
})
console.table(sqrt);






const users =[
    {full_name:"Ram",age:12,city:"Salem",salary:10000},
    {full_name:"Sam",age:15,city:"Chennai",salary:10500},
    {full_name:"Ravi",age:22,city:"Namakkal",salary:12000},
    {full_name:"Joes",age:18,city:"Hosur",salary:6000},
    {full_name:"Aureen",age:47,city:"Dharmapuri",salary:10000},
    {full_name:"Stanley",age:10,city:"Salem",salary:8000},
  ];

  console.table(users)


  let eligible_status=users.map((user)=>({
    // name:user.full_name,
    // age:user.age,                          
    // city:user.city,
    // salary:user.salary,
    ...user,                                          //Spread operatorn
    status: user.age>=18 ? "Eligible" : "Not Eligible"

  }))

console.table(eligible_status);



//Modifying array element
const words =["hello","world"];
const capitilize=words.map(word=>word.toUpperCase())

console.log(capitilize);
console.log(words);

//combining array

const fruits=["apple","banana"];
const colors=["red","yellow"];

const fruitscolors=fruits.map((fruit,index)=>fruit+" = "+colors[index])
console.log(fruitscolors);
 
//filtering array

const number1=[1,2,3,4,5,6];
const evenNumber=number1.map(num=>num%2==0);
console.log(evenNumber);

*/

//extracting properties from an array of obiect



const word=["apple","banana","mango","melon"]

const elementarr=word.map(function(value,index,array){
    return{
        word:value,
        lenght:value.length,
        position:index,
        totalwords:array.length
    }
});

console.log(elementarr);

