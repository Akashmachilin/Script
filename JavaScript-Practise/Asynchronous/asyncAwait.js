/*
let newPromise =new Promise((fullfilled,failed) => {
    let dataRecieved=false

    if (dataRecieved){
        fullfilled("Data Fetched successfully")
    }
    else{
        //failed("Data not Found")
        throw new Error("Search proper data")
    }
})
//newPromise.then((message)=>{ console.log(message);})



async function newElementfunc(){
    try{
        let message = await newPromise   
        console.log(message);
    }
    catch(error){
        console.log(error); 
    }
    finally{
        console.log("END")
    }
}
newElementfunc()
console.log("Last");




// async function welcome() {
//     return "hello world";
// }
// console.log(welcome());
// welcome().then((result) => {
//     console.log(result);   
// }).catch((err) => {
//     console.error(err);
// });


async function getData(par) {
   let blogPost = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ("Blog Post")
    }, 2000);
   });
   let blogComent = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Comment for Blog")
    }, 3000);
   });
   console.log("Fetching post...");
   
   let post=await blogPost;
   console.log("Post :" , post);
   console.log("Fetching comments...");

   let comments=await blogComent;
   console.log("comments :" , comments);
   return [post,comments]
}
console.log("Welcome to Blog ");
let data =getData()
console.log(data);

data
.then((value) => {
    console.log(value);  
}).catch((err) => {
    console.error(err); 
});

*/

/*
let result = function(marks){
    return new Promise((resolve, reject) => {
        console.log("Calculation Result...");
        setTimeout(() => {
            let total=0;
            let result="pass";
            marks.forEach(mark => {
                total+=mark;
                if (mark<35) {
                    result="fail"
                }
            });
            resolve({total:total,result:result})
        }, 2000);
    })
}
result([20, 40, 50]).then(res => {
    console.log(`Your Total: ${res.total}, Result: ${res.result}`);
}).catch(err => {
    console.log(err);
});

let names="Akash"
console.log(`hi,${names}`);

*/

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved Value");
  }, 15000);
});

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved Value");
  }, 10000);
});
async function handlePromise() {
  console.log("Hello Developer");

  const val = await p;
  //async await function to handle promises
  console.log("Namasthe JavaScript");
  console.log(val);

  const val2 = await p1;
  console.log("Namasthe Node- JS");
  console.log(val2);
}
handlePromise();

// function getData() {
//   p.then((res) => console.log(res));         //Normal function to get promises
//   console.log("Namaste Javascript");
// }
// getData();
