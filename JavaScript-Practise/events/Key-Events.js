/*
==keyborad 
Keydown
Keypress (deprecated)
Keyup
Key 
code


document.addEventListener("keydown",handleKeyEvents);
document.addEventListener("keypress",handleKeyEvents);
document.addEventListener("keyup",handleKeyEvents);

function handleKeyEvents(event){
    const eventType=event.type;
    const keyCode=event.code;
    const KeyName=event.name;
    console.log(`Event type:${eventType}`),
    console.log(`Keycode:${keyCode}`),
    console.log(`Key Name:${KeyName}`)
    
}
*/

const input=document.getElementById("input-num");
const msg=document.getElementById("error");

input.addEventListener("keydown" , function(event){
    const key = event.key;
    console.log(key);
    if (isNaN(key)){
        event.preventDefault();
        console.log('please enter number');
    }else{
        msg.textContent="";

    }
    
})
