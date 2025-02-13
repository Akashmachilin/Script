/*
//FOR EACH

const users =[
    {full_name:"Ram",age:12,city:"Salem",salary:10000},
    {full_name:"Sam",age:15,city:"Chennai",salary:10500},
    {full_name:"Ravi",age:22,city:"Namakkal",salary:12000},
    {full_name:"Joes",age:18,city:"Hosur",salary:6000},
    {full_name:"Aureen",age:47,city:"Dharmapuri",salary:10000},
    {full_name:"Stanley",age:10,city:"Salem",salary:8000},
  ];
  //console.table(users);

  users.forEach((value,num)=>{
    console.log("Name: "+ value.full_name,"id: "+num);
  })
  




//----EXAMPLE------------

let fruits = [ "Apple", "WaterMelon", "MuskMelon", "Banana" ]
fruits.forEach(fruit => console.log(fruit));

function printFruit(currentElement, index, totalArray){
    console.log( currentElement, index, totalArray );    
}
fruits.forEach(printFruit);



let fruits = ["Apple", "WaterMelon", "MuskMelon", "Banana"];

fruits.forEach(fruit => console.log(fruit)); 

console.log(fruits); 

*/
//for each method to sum all elements of array

const numbers=[1,2,3,4,5];
let total=0;
numbers.forEach(number =>{ total +=number;
});
console.log(total);

/*
//create a new array using existing one:

const doublenumber=[];
numbers.forEach(number =>{
     doublenumber.push(number*2);
});
console.log(doublenumber);



//To find the max element of an array

const numbers=[1,2,3,4,5];
let max=[];
numbers.forEach(number=>{
    if (number>max){
        max=number
    }
})
console.log(max);


//find a average of an array using for each

const numbers=[1,2,3,4,5];
let total=0;
numbers.forEach(number=>{
    total+=number;
})
console.log(total/numbers.length);



//filter the even number from the array using for each

const numbers =[1,2,3,4,5,6,7,8,9,10];
const evenNumber=[];

numbers.forEach(number=>{
    if (number%2==0){
        evenNumber.push(number)
    }
})
console.log(evenNumber);




//to update an array using for each method

const names=["john","sam","bob","jane","mike"];
names.forEach((name,index)=>{
    names[index]=name.toUpperCase();
})
console.log(names);

*/









































