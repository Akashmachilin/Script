/*
//PARENT

function traversingParent(){

    let getParent=document.querySelector(".child1")
    console.log(getParent.parentElement);
    console.log(getParent.parentNode);
    
    
    let getParent1=document.querySelector("html")
    console.log(getParent1.parentElement);
    console.log(getParent1.parentNode);
}
traversingParent()


//CHILD

function selectChild(){
    let getElementByClass= document.querySelector(".parent")
    console.log(getElementByClass.childElementCount);  
    console.log(getElementByClass.childNodes);  
    console.log(getElementByClass.children);  
    console.log(getElementByClass.firstChild);  
    console.log(getElementByClass.firstElementChild);  
    console.log(getElementByClass.lastChild);  
    console.log(getElementByClass.lastElementChild);  
}


*/

//SIBLINGS


function selectsiblings(){
    let child1=document.querySelector(".child1")
    console.log(child1.nextElementSibling);
    console.log(child1.nextSibling);
    console.log(child1.previousSibling);
    console.log(child1.previousElementSibling);   
}

