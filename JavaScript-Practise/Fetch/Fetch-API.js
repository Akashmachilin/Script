//Fetch

/*

const btnText = document.querySelector("#btn-text");
const outputText = document.querySelector("#txt-output");

btnText.addEventListener("click", getTextFile);

function getTextFile() {
  fetch("Data.txt")
    .then((res) => res.text())
    .then((data) => {
      outputText.innerHTML = data;
    });
}



//FETCH

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
        if (!response.ok) {
            throw new Error("Data Not Found") 
        }
        else{
            return response.json();
        }
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error)=>{
        console.error(error.message);
    })





    IN Async and Await


    async function fetchData() {
        
        try {
           let response = await fetch ('https://jsonplaceholder.typicode.com/todos/1') 
           console.log(response);
           
           if(!response.ok){
            throw new Error ("Data Not Found")
           }
           let data = await response.json()
           console.log(data);
           
        } 
        catch (error) {
            console.error(error.message);
            
        }
    }
    fetchData()


*/
