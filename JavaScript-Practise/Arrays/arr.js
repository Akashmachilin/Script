
/*
let a=[10,20,30,40,50];
// console.log(a);
// console.table(a);

let b=new Array(10,20,30,40,50);
// console.table(b);


let c=new Array("able",10,true,{m1:30,m2:40,m3:50});
console.table(c);

*/

// --------------#-    IMPORTANT ARRAY METHODS     -#-----------------------

//adding elements to array

// let cars=["bmw","audi","ferrari","nissan"]
// cars[1]="benz"
// console.log(cars);
//---------------------------------------------
// let num=[3,5,7,8,9]
// num.push(20)
// console.log(num);  //push
//---------------------------------------------
// let num=[3,5,7,8,9]
// num.pop()
// console.log(num);   //pop
//---------------------------------------------
// let num=[3,5,7,8,9]
// num.shift()
// console.log(num);   //shift
//-------------------------------------------
// let num=[3,5,7,8,9]
// num.unshift(20)
// console.log(num);     //unshift
//---------------------------------------------

// let num=[3,5,7,8,9]
// let addnum =num.slice(1,3)
// console.log(addnum);     //slice

//--------------------------------------------

// let addnum=[3,5,7,8,9]
// addnum.splice(1,3 ,0,1)
// console.log(addnum);         //splice     

//----------------------------------------------

//Finding Index of array

//  let cars=["bmw","audi","ferrari","nissan","audi"]
// console.log(cars.indexOf("audi"));          //indexof
// console.log(cars.lastIndexOf("audi"));      last indexof
// console.log(cars.includes("maudi"));           //includes

//--------------------------------------------------------------

//Finding Index of array in non primitive
// let order=[
//     {id:1, item:"cars", quantity: 1},
//     {id:2, item:"bus", quantity: 2},
//     {id:3, item:"bike", quantity: 3},
// ]

// let result=order.findIndex(function(orders){
//     return orders.item==="bike"
// })
// console.log(result);    //normal function

// let result= order.findIndex ( (orders)=>orders.item ==="bike")
// console.log(result);      //arrow function



//----------------------------------------------------------------

//Emptying array

// let numbers=[1,2,3,4,5];
// numbers=[];
// console.log(numbers);

// numbers.splice(numbers.length)
// console.log(numbers);

//-----------------------------------------------------------

//combining arrays
// const shopping_cart=["maggi","beans","masala"];
// const additional_cart=[{box:"salt"}]

//combine
// let recipe=shopping_cart.concat(additional_cart)
// additional_cart[0].box="sugar"
// console.log(recipe);

//extract
// let extracting=recipe.slice(1,4)
// console.log(extracting);

//------------------------------------------------

//spread operator
// const shopping_cart=["maggi","beans","masala"];
// const additional_cart=[{box:"salt"}]

// let recipe=[...shopping_cart,"gram",...additional_cart,"sugar"]
// console.log(recipe);

//Iterating elements
//For-of
// const dailyTask=["wake","sleep","eat","yoga"]
// for(let task of dailyTask){
//     console.log(task);   
// }

//For-In

// const dailyTask=["wake","sleep","eat","yoga"]
// for(let task in dailyTask){
//     console.log(task,dailyTask[task]);   
// }
//--------------------------------------------------------
//For-Each
// const dailyTask=["wake","sleep","eat","yoga"]
// dailyTask.forEach ((Task,index) => {
//     console.log(index," : ",Task)
// })
    
//--------------------------------------------------------
//joining
// const dailyTask=["wake","sleep","eat","yoga"]
// let task=dailyTask.join("'s ")
// console.log(task);

//---------------------------------------------------------

//split
// let fullname="Anbe Shivam"
// let name = fullname.split(" ");

// let firstName = name[0];
// let lastName = name[1];
// console.log(`My First name is ${firstName} and last name ${lastName}`)


// let postTitle = "This is my Post!".toLowerCase();
// console.log(postTitle);

// let postSlug = postTitle.split(" ");
// let finalSlug = postSlug.join("_")

// console.log(finalSlug);

//----------------------------------------------------------------------
//SORTING

// const students = [3,7,2,5]
// students.sort();

// students.reverse()
// console.log(students);

//---------------------------------------------------------------

// const student=[
//     {id:3, name: "Akash"},
//     {id:8, name: "John"},
//     {id:1, name: "Ram"}
// ]
// student.sort(function(a,b){
    
//     //a<b==-1
//     if (a.name < b.name)return-1;
//     //a>b==1
//     if (a.name > b.name)  return 1;
//     //a===b=0
//     if (a===b ) return 0
// })

//------------------------------------------------------------------
// every()  == primitive type

//allow only adults above 18

// const queue_by_age = [14,32,45];

// let isallowed = queue_by_age.every(function(value){
//     return value>=18
// });
// console.log("isAllowed: ",isallowed);

//------------------------------------------------------------
//some()

// const queue_by_age = [14,32,45];

// let isallowed = queue_by_age.some(function(value){
//     return value>=18
// });
// console.log("isAllowed: ",isallowed);

//-------------------------------------------------------------

// Testing odd or even
// const numbers= [1,2,3,4,5,6]
// let isEven = numbers.every(function(value){
//     return value%2==0;
// });
// console.log("isEven:",isEven);

//--------------------------------------------

// const numbers= [1,2,3,4,5,6]
// let isEven = numbers.some(function(value){
//     return value%2==0;
// });
// console.log("isEven:",isEven);
//-------------------------------------------------

//every()  == non-primitive type or reference type

// const item =[
//     { id:1 , name:"Mobiles", isDeliverable:true },
//     { id:2 , name:"Laptop", isDeliverable:true },
//     { id:3 , name:"T.V", isDeliverable:false },
// ]
// let allDeliverable = item.some(function(value){
//     return value.isDeliverable==true
    
// })
// console.log("allDeliverable"," ", allDeliverable);

//---------------------------------------------------------------------

//finding

const item =[
    { id:1 , name:"Mobiles", cost:6500 },
    { id:2 , name:"Laptop", cost:8000 },
    { id:3 , name:"T.V", const:20000 },
]
let findinfilter = item.filter(function(value){
    return value.cost>=5000
})
console.log(findinfilter);

//find and filter difference

const items =[
    { id:1 , name:"Mobiles", cost:6500 },
    { id:2 , name:"Laptop", cost:8000 },
    { id:3 , name:"T.V", const:20000 },
]
let findin = item.find(function(value){
    return value.cost>=5000
})
console.log(findin);

//--------------------------------------------