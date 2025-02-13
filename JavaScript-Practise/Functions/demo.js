const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
number.forEach((value, index) => {
  console.log("Index: " + index + " Value: " + value);
});

const user1 = [
  { full_name: "Ram", age: 12, city: "Salem", salary: 10000 },
  { full_name: "Sam", age: 15, city: "Chennai", salary: 30000 },
  { full_name: "Ravi", age: 18, city: "Hosur", salary: 80000 },
  { full_name: "joes", age: 21, city: "Vellor", salary: 70000 },
  { full_name: "Arun", age: 25, city: "Salem", salary: 50000 },
];

console.table(user1);

const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sqrt = number.map((value) => {
  return Math.sqrt(value);
});
console.table(sqrt);

const user2 = [
  { full_name: "Ram", age: 12, city: "Salem", salary: 10000 },
  { full_name: "Sam", age: 15, city: "Chennai", salary: 30000 },
  { full_name: "Ravi", age: 18, city: "Hosur", salary: 80000 },
  { full_name: "joes", age: 21, city: "Vellor", salary: 70000 },
  { full_name: "Arun", age: 25, city: "Salem", salary: 50000 },
];

console.table(user2);

let eligible_status = user2.map((user) => ({
  ...user,
  status: user.age > 18 ? "Eligible" : "Not Eligible",
}));

console.table(eligible_status);

//alert("Welcome to PEN")

// Defining a JSON object
let person = {
  name: "John Doe",
  age: 30,
  isEmployed: true,
  address: {
    street: "123 Main St",
    city: "New York",
    postalCode: "10001",
  },
  hobbies: ["reading", "travelling", "coding"],
};

// Converting a JavaScript object to a JSON string
let jsonString = JSON.stringify(person);
console.log("JSON String:", jsonString);

// Parsing a JSON string back to a JavaScript object
let jsonObject = JSON.parse(jsonString);
console.log("JavaScript Object:", jsonObject);

// Accessing data from the JavaScript object

console.log("Name:", jsonObject.name);
console.log("City:", jsonObject.address.city);
console.log("First Hobby:", jsonObject.hobbies[0]);
