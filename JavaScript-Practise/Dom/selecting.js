console.log(Document);

let heading=(document.getElementsByTagName("h1"));
console.log(heading);

let para1=(document.getElementsByClassName("PARA1"))
console.log(para1);


let uniqpara=(document.getElementById("uniqPARA1"))
console.log(uniqpara);


let nameattri=document.getElementsByName("input-1")
console.log(nameattri);


// let queryselecting=document.querySelector("h1")
// let queryselecting=document.querySelector(".PARA1")
// let queryselecting=document.querySelector("#uniqPARA1")
// let queryselecting=document.querySelector("#uniqPARA1")


// let queryselecting=document.querySelectorAll("h1")
// console.log(queryselecting);

// let queryselecting1=document.querySelectorAll(".PARA1")
// console.log(queryselecting1);

// let queryselecting2=document.querySelectorAll("#uniqPARA1")
// console.log(queryselecting2);


let newElement = document.createElement("h2")
newElement.innerText = "MANIPULATING PHASE"
document.body.append(newElement)
console.log(newElement);

