/*

let arr = [10,2,3,4,5]

// 10 + 2 + 3 + 4 + 5 => 24

let totalVal = 0; // 10

for (let i = 0; i < arr.length; i++) {
    totalVal = totalVal + arr[i]
}

// 1st => totalVal = 0 + 10 => 10
// 2nd => totalVal = 10 + 2 => 12
//5th => totalVal = 19 + 5 => 24

console.log( totalVal );

let totalVal1 = arr.reduce( ( acc, cElement, index, array  )=>{ 
     return acc+cElement  }, 0 )

//[10,2,3,4,5]
// 1st => acc + cElement => 0 + 10 => 10
// 2nd => 10  + 2 => 12
// 3rd => 12 + 3 => 15
//5th => 19 + 5 => 24 

console.log( totalVal1 );

*/

let employees = [
    {eName: "Xyz", salary:1000},
    {eName: "abc", salary:10000},
    {eName: "Kesavan", salary:20000},
    {eName: "Alex", salary:25000}
]

let calcTotalSalary = employees.reduce( (acc, cElement)=>{  return acc + cElement.salary }, 0  )

console.log( calcTotalSalary );





//Reduce in Javascript


let numbers=[1,2,3,4,5];
let sum=numbers.reduce((accumulator,currentvalue)=>accumulator+currentvalue);
console.log(sum);


let nestedArray = [[1,2],[3,4],[5,6],[7,8]];
let flattenedArray=nestedArray.reduce((accumulator,currentvalue)=>accumulator.concat(currentvalue));
console.log(flattenedArray);


let colors = ['red', 'blue', 'green', 'red', 'blue', 'yellow'];
let colorCounts=colors.reduce((accumulator,currentvalue)=>{
    if(currentvalue in accumulator){
        accumulator[currentvalue]++;
    }else{
        accumulator[currentvalue]=1;
    }
    return accumulator
},{});
console.log(colorCounts);


let numberLarge = [5, 10, 15, 20, 25];
let largest = numberLarge.reduce((accumulator,currentvalue)=>{
    return Math.max(accumulator,currentvalue);
});
console.log(largest);


let arr2d=[
    ["a","b","c"],
    ["c","d","f"],
    ["d","f","g"],
];

let arr3d=arr2d.flat().reduce((accumulator,currentvalue)=>{
    if (accumulator[currentvalue])
        accumulator[currentvalue]++
    else
        accumulator[currentvalue]=1
        return accumulator
},{})
console.log(arr3d);
