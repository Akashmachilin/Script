//class

class User {
  static numberofUser = 0;
  constructor(name, age) {
    this.name = name; //Instance variable
    this.age = age;
    User.numberofUser++;
  }
  login() {
    console.log("hi", this.name);
  }
  logout() {
    console.log("you are logged out");
  }
  static displayTotalUser() {
    console.log("number of user :", User.numberofUser);
  }
}
let userone = new User("ram", 23);
let userTwo = new User("sam", 28);
console.log(userone);
console.log(userTwo);
User.displayTotalUser();

//Inheritance
class Paiduser extends User {
  constructor(name, age) {
    super(name, age);
    this.storage = 100;
  }
  message() {
    console.log("you have 100gb free storeage");
  }
  login() {
    console.log("you are free to access");
  }
}
let Paiduser1 = new Paiduser("varma", 65);
Paiduser1.login();
Paiduser1.message();

//get and set

class Temperature {
  constructor(temp) {
    this.temp = _temp;
  }
  get() {
    this._temp;
  }
}
let temp1 = new Temperature(25);
