let numbers=[1,2,3,4,5,6,7,8,9,10];
let evenNumber=numbers.filter(number=>number%2==0);
console.log(evenNumber)


let users=[
    {name:"alice",age:25},
    {name:"bob",age:17},
    {name:"chalie",age:23},
    {name:"don",age:14}
]
let eligible=users.filter(user=>user.age>=18);
console.log(eligible);


let words=["cat","donkey","dog","fish","giraffe"];
let fourLetter=words.filter(word=>word.length==3);
console.log(fourLetter);


let animals=["cat","donkey","elephant","fish","giraffe","eagle"];
let wordStartwithE = animals.filter(animal=>animal.startsWith("e"));
console.log(wordStartwithE);



const products = [
    { name: 'Apple', category: 'fruit', price: 100 },
    { name: 'Carrot', category: 'vegetable', price: 50 },
    { name: 'Orange', category: 'fruit', price: 120 },
    { name: 'Broccoli', category: 'vegetable', price: 75 },
    { name: 'Mango', category: 'fruit', price: 110 }
];

const expensiveFruits=products.filter(product=>product.category== "fruit"  &&  product.price>100);
console.log(expensiveFruits);



let books=[
    { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', year: 2011 },
    { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
    { title: 'Learning Web Design: A Beginner\'s Guide to HTML, CSS, JavaScript, and Web Graphics', author: 'Jennifer Niederst Robbins', year: 2012 },
    { title: 'HTML and CSS: Design and Build Websites', author: 'Jon Duckett', year: 2011 },
    { title: 'CSS Secrets: Better Solutions to Everyday Web Design Problems', author: 'Lea Verou', year: 2015 },
    { title: 'JavaScript and JQuery: Interactive Front-End Web Development', author: 'Jon Duckett', year: 2014 },
    { title: 'You Don\'t Know JS', author: 'Kyle Simpson', year: '2014-2019' },
    { title: 'React: Up & Running', author: 'Stoyan Stefanov', year: 2016 },
    { title: 'Node.js Design Patterns', author: 'Mario Casciaro', year: 2014 },
    { title: 'Head First Design Patterns', author: 'Eric Freeman and Elisabeth Robson', year: 2004 }
];






































































