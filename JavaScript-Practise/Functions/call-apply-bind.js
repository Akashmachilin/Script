// let emp1 = {
//   ename: "akash",
//   esalary: 100000,
//   introYourself: function (a, b) {
//     console.log(a + b);
//     console.log(this.ename);
//   },
// };
// emp1.introYourself(20, 30);

// var ename = "muruga";
// let emp = {
//   ename: "akash",
//   esalary: 100000,
//   introYourself: (a, b) => {
//     console.log(a + b + this.ename);
//   },
// };
// emp.introYourself(20, 30);

//CALL

let person = {
  pfname: "machilin",
  plname: "murugan",
};

let person1 = {
  id: "UNIQ1234",
  pfname: "Akash",
  plname: "palani",
  introYourself: function (a = 10, b = 67) {
    console.log(this.pfname + " " + this.plname + " " + (a + b));
    return a + b;
  },
};
person1.introYourself.call(person);
// person1.introYourself.call(person, 10, 50);
// person1.introYourself.apply(person, [10, 20]);
// let newFun = person1.introYourself.bind(person, 10, 20);
// console.log(newFun());
