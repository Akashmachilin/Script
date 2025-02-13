//sum of Two Number
// [2,7,11,15]=9 add any two number to get the solution
//brute Force
let nums = [2, 7, 11, 15];
let target = 9;
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      return [i,j];
    }
  }
}
/*
//Bubble Sort
function bubbleSort(arr) {
  let n = arr.length;

  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
let arr = [8, 3, 7, 1, 5];
console.log("Sorted array:", bubbleSort(arr));
*/
