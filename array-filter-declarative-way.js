const arr = [1, 2, 3, null, false, 4, 5, '', 'stack', 6, 7];

let count = 0;
let countI = 0;
let countJ = 0;
let countJIf = 0;
for (let i = 0; i < arr.length; i++) {
  countI += 1;
  for (let j = i + 1; j < arr.length; j++) {
    countJ += 1;
    if (typeof arr[i] !== 'number') {
      countJIf += 1;
      arr[i] = arr[j];
      arr[j] = undefined;
    }
  }
  if (arr[i] === undefined) count += 1;
}
arr.length -= count;
console.log(arr);
console.log('loop I run ' + countI + ' times');
console.log('loop J run ' + countJ + ' times');
console.log('If condition in loop J run ' + countJIf + ' times');
