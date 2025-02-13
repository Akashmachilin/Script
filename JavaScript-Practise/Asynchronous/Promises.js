//Promises
// let newPromise = new Promise((resolve, reject) => {
//   let dataRecieved = true;

//   if (dataRecieved) {
//     resolve("Data Recieved");
//   } else {
//     reject("Data Not Recieved");
//   }
// });
// newPromise
//   .then((message) => {
//     console.log("Success :" + " " + message);

//     return "Next Success :" + " " + message;
//   })
//   .then((nextmessage) => {
//     console.log(nextmessage);
//   })

//   .catch((error) => {
//     console.log("Failure :" + " " + error);
//   })
//   .finally(() => {
//     console.log("End");
//   });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((Response) => Response.json)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error("error");
//   });

// //----------------------------------------------------------------------------------

// let newPromise1 = new Promise((resolve, reject) => {
//   let dataRecieved = false;

//   if (dataRecieved) {
//     resolve("Data recieved");
//   } else {
//     reject("Data not recieved");
//   }
// });
// newPromise
//   .then((result) => {
//     console.log("Sucess :" + result);
//   })
//   .catch((err) => {
//     console.log("Failour :" + err);
//   })
//   .finally(() => {
//     console.log("END");
//   });

// ----------------------------------------------------

// const Promises = new Promise((resolve, reject) => {
//   const sum = 1 + 1;
//   if (sum == 2) {
//     resolve("success");
//   } else {
//     reject("error");
//   }
// });

// Promises.then((result) => {
//   console.log(result); // "success" will be logged here if resolved
// }).catch((err) => {
//   console.error(err); // Will log "error" if rejected, but not triggered in this case
// });

// setTimeout(() => {
//   console.log("Hi");
// }, 250);

// function setTimeoutPromise(duration) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, duration);
//   });
// }
// setTimeoutPromise(250)
//   .then(() => {
//     console.log("Akash");
//     return setTimeoutPromise(250);
//   })
//   .then(() => {
//     console.log("Aravind");
//     return setTimeoutPromise(250);
//   })
//   .then(() => {
//     console.log("Akshay");
//     return setTimeoutPromise(250);
//   });

// setTimeout(() => {
//   console.log("Normal-1");
//   setTimeout(() => {
//     console.log("Normal-2");
//     setTimeout(() => {
//       console.log("Normal-3");
//     }, 250);
//   }, 250);
// }, 250);

// const button = document.querySelector("button");

// function addEventPromise(element, method) {
//   return new Promise((resolve) => {
//     element.addEventListener(method, resolve);
//   });
// }

// addEventPromise(button, "click").then(() => {
//   console.log("Clicked");
// });

// console.log(Promise.resolve("good"));
// Promise.all([
//   Promise.resolve("good"),
//   Promise.resolve("good"),
//   Promise.resolve("good"),
// ])
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Promise.any([
//   Promise.reject("good-1"),
//   Promise.reject("good-2"),
//   Promise.resolve("good-3"),
// ])
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Promise.race([
//   Promise.reject("good"),
//   Promise.reject("good"),
//   Promise.resolve("good"),
// ])
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// allsettleddoes not work in this method

// Promise.allSettled([
//   Promise.resolve("good"),
//   Promise.reject("good"),
//   Promise.reject("good"),
// ])
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const promise = new Promise((resolve, reject) => {
//   resolve("victory");
//   reject("not done");
// });
// promise
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("All Completed...");
//   });

// const getPost = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const posts = ["post-1", "post-2", "post-3"];
//       resolve(posts);
//     }, 3000);
//   });
// };

// const getComments = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const comments = ["comment-1", "comment-2", "comment-3"];
//       resolve(comments);
//     }, 2000);
//   });
// };

// Promise.all([getPost(), getComments()])
//   .then((result) => {
//     const [posts, comments] = result;
//     console.log(posts); // Will log posts after 2.5 seconds
//     console.log(comments); // Will log comments after 2 seconds
//   })
//   .catch((err) => {
//     console.error(err); // Will log an error if something goes wrong
//   });
