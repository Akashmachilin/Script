/*
let out='';
for (let i = 0; i <=10; i++) {
    console.log(i+ " * "+num +" = "+i);

    if(i%2==0){
        console.log("0");    
    }else{
        console.log("1");  
    }
    out=out+(i%2)
    out=out+(" * ")
    
}
console.log(out);



let out='';
for (let i = 0; i <=10; i++) {
    let temp=(i*2)-1;
    for (let j = 0; j <temp; j++) {
        out=out+("* ")
        // out=out+(i+" ")
        // out=out+(i%2==0?1:0)+" ";
    }
    out=out+"\n"
}
console.log(out);


---------------------------
*****
*   *
*   *
*   *
*****
---------------------------
let i;
let j;
let row;
let n = 5;

for (i = 1; i <= 5; i++) {
  row = "";

  for (j = 1; j <= 5; j++) {
    if (i == 1 || i == 5 || j == 1 || j == 5) {
      row = row + "* ";
    } else {
      row = row + "  ";
    }
  }

  console.log(row);
}

*/

// let j;
// let row;
// let n = 11;

// for (i = 0; i < n; i++) {
//   row = "";

//   for (j = 0; j < n; j++) {
//     if (
//       i == 0 ||
//       i == n - 1 ||
//       j == 0 ||
//       j == n - 1 ||
//       j == Math.floor(n / 2) ||
//       i == Math.floor(n / 2) ||
//       i == j ||
//       i + j == n - 1 ||
//       i + j == Math.floor(n / 2) ||
//       i - j == Math.floor(n / 2) ||
//       i + j == n - 1 + Math.floor(n / 2) ||
//       j - i == Math.floor(n / 2)
//     ) {
//       row = row + "* ";
//     } else {
//       row = row + "  ";
//     }
//   }

//   console.log(row);
// }

/*

//------------------------------
* * * * * * * * * * * 
* *     * * *     * * 
*   * *   *   * *   * 
*   * *   *   * *   * 
* *     * * *     * * 
* * * * * * * * * * * 
* *     * * *     * * 
*   * *   *   * *   * 
*   * *   *   * *   * 
* *     * * *     * * 
* * * * * * * * * * * 
//------------------------------

*/
let out = "";
for (let i = 10; i > 0; i--) {
  //   let temp = i * 2 - 1;
  for (let j = 0; j < i; j++) {
    out = out + "* ";
  }
  out = out + "\n";
}
console.log(out);
