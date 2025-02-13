/*

//CALL BY VALUE

let x=10;
let y=x;
//x=20;
y=20;
console.log(x,y);



//CALL BY REFERENECE

let obj1={
    name:"AKash"
};


let obj2=obj1;
obj2.name="Machilin";
obj2.role="Developer"
console.log(obj2,obj1)


let arr1=[1,2,3,4,5];
let arr2=arr1;
arr2[0]=10;
arr1[2]="Two"
console.log(arr2,arr1);



//DEEP COPY

let obj1 ={
    name1:"Akash",
    role:"Developer"
}
let obj2={...obj1};
obj2.name1="Machilin"
console.log(obj2,obj1);



//Shallow Copy

let person={
    name1:"Johny",
    role:"Youtuber",
    hobbies:{
        cricket:"ODI Player",
        football:"90 mins"
    }
}

let person2={...person,hobbies:{...person.hobbies}};
person.role="Instagram"
person2.hobbies.cricket="Test Player"
console.log(person,person2);




//DEEP COPY METHODS USING JSON

let person={
    name1:"Johny",
    role:"Youtuber",
    hobbies:{
        cricket:"ODI Player",
        football:"90 mins"
    }
}

let person2={...person,hobbies:{...person.hobbies}};
let newObj1 = JSON.stringify( person ); //let newObj1 = JSON.parse(JSON.stringify( person )
let newObj2=JSON.parse(newObj1)        //                   "Short-hand"
person.role="Instagram"
person2.hobbies.cricket="Test Player"
console.log(person,person2);


console.log(newObj2);


*/


//Shallow copy using array

let arr =[1,2,3,4,[9,8,7,6]]

let arr1 =[...arr ]

//arr[0]="one"

console.log(arr,arr1);



