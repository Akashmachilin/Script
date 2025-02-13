/*

const obj1={
    name:"akash",
    age:25,
    role:"developer"
}
console.log(obj1);



const person= new Object
person.name="akash",
person.age=34,
person.role="Developer"
console.log(person);


const obj2={
    name:"akash",
    age:25,
    role:"developer",
    job (){
        console.log("hello"+ " " +this.role);   
    }
}
obj1.job();


let users1={
    name:"akash",
    age:34,
    city:"tamabaram",
    contact:"7550102164"
};
for(let prop in users1){
    console.log(prop + " : " + users1[prop]);  
}


// ____________________coverting Objects into array____________________________

let users2={
    name:"akash",
    age:34,
    city:"tamabaram",
    contact:"7550102164"
};

let arr_keys=Object.keys(users2);
console.log(arr_keys);

let arr_values=Object.values(users2)
console.log(arr_values);

let arr_full=Object.entries(users2)
console.log(arr_full);


let users3={
        name:"akash",
        age:34,
        city:"tamabaram",
        contact:"7550102164"
    };

    for (let prop in users3){
        console.log(prop+ " : "+users3[prop]);
    }

// Destructuring
let users4={
        fullName:"akash",
        age:34,
        city:"tamabaram",
        contact:"7550102164"
};

let {fullName,age,city}=users4;
console.log(fullName);
console.log(age);
console.log(city);

// inherit---------------------------------------------

let users5={
    fullName:"akash",
    age:34,
    city:"tamabaram",
    contact(){
        console.log("Hello" +" "+ this.fullName);   
    }
};

    let employee=Object.create(users5)
        employee.fullName ="jane";
        employee.contact();

// creat using function----------------------------------------

function person(name, age) {
    this.name = name; this.age = age;
    this.greet = function () {
        console.log('hello' + " " + this.age);
    };
};
let person1 = new person("akash", 30)
person1.greet();

*/



