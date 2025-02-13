/*

//For Loops
--------------

for (i=1 ; i<=10 ;i++){
    console.log(i);   
}

//-----------------------------------------------------------------

tablefor=2;
for (i=0 ; i<10 ;i++){
    let temp = i+1;
    console.log(temp+" * "+tablefor+" = " + (temp*tablefor));   
}

//------------------------------------------------------------------

let names=["Akash","Maxiee","Carry","Izinoo","zeezooo"]
for (let i=0; i<names.length; i++){
    console.log(names[i]);
}

//------------------------------------------------------------------

*/

//Nested Loops
students = [
    {id:1, name: "prem"},
    {id:2, name: "sam"},
    {id:3, name: "ram"},
    {id:4, name: "cam"},
    {id:5, name: "boom"},
    {id:6, name: "from"},
];

schoolAstudentIDs=[1,3,5];
schoolBstudentIDs=[2,4,6];
//Print Students Nmaes of a Particular School

function printNames(IDs){
    if (IDs){
        console.log(students.id==schoolAstudentIDs);
    }
}
printNames(schoolAstudentIDs)
































































//FOR LOOPS PATTERN PRINTING

// *
// **
// ***
// ****
// *****         

// let i=5
// for(let i=0;i<10;i++){
//     console.log(i+1); 
// }


// for(let i=1;i<=10;i++){
//     console.log(i%2)
// }


// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         console.log("0");   
//     }else{
//         console.log("1");  
//     }
// }

/*
//_______________________________
// *
// **
// ***
// ****
// *****
//_______________________________
let not="";
for (let row=1;row<=5;row++){
    for(let col=0;col<row;col++){
        not = not+"* "
    }
    not = not+"\n"
}
console.log(not);   

//_______________________
// *****
// ****
// ***
// **
// *
//_________________________

let out="";
for (let row=5;row>0;row--){
    for(let col=0;col<row;col++){
        out = out+"* "
    }
    out = out+"\n"
}
 console.log(out);

 */

 //_____________________
//      *
//     **
//    *** 
//   ****
//  *****
//________________________


// let six="";
// for (let i=9;i>=0;i--){
//     for(let j=0;j<i;j++){
//         six = six +"  ";
//     }
//     for (let k=i;k<10;k++){
//         six=six+"* "
//     }
//     six = six+"\n";
// }
//  console.log(six);

//________________________
// *****
//  ****
//   ***
//    **
//     *
//_________________________

// let out="";
// for (let i=0;i<=10;i++){
//     for(let j=0;j<i;j++){
//         out=out+"  ";
//     }
//     for (let k=i;k<=10;k++){
//         out=out+"* ";
//     }
//     out= out+ "\n";
// }
// console.log(out);