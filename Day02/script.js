// Given an array of integers. All numbers repeat, except one.FInd the odd one out.
function findOddOneOut(arr) {
  let result = 0;
  for (let num of arr) {
    result ^= num; 
  }
  return result;
}


const array = [4, 1, 2, 1, 2];
console.log(findOddOneOut(array)); // Output: 4

