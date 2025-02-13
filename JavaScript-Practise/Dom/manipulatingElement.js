function manipulatingElement (){
    let newList=document.createElement("li")
    
    // newList.innerText="<a>LINK</a> item-6";
    // newList.innerHTML="<a>LINK</a> item-7";
    // newList.textContent="<a>LINK</a> item-5";
    
    
    
    let inputTag=document.querySelector("input")
    // console.log(inputTag.value);
    newList.innerText = inputTag.value
    // console.log(newList);
    
    let orderList=document.querySelector("ol")
    // orderList.append("text node", newList)
    // orderList.appendChild(newList)

    // orderList.insertBefore(newList,orderList.children[2])
    // orderList.replaceChild(newList,orderList.children[2])
    // orderList.removeChild(orderList.children[2])
    // orderList.remove()


    newList.style.color="blue"
    newList.style.boxShadow="3px 3px 5px white"


    orderList.append("text node", newList)
    // orderList.prepend("text node", newList)

    

}