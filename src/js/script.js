const strArr = ['Cat', 'Dog', 'Lion', 'Bear', 'Deer', 'Elephant'];

const longStrArr = strArr.filter((value) => value.length > 5);

console.log(longStrArr);

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ovenSum = numArr.reduce(
  (accumulator, currentValue) =>
    currentValue % 2 === 0 ? currentValue + accumulator : accumulator,
  0
);

console.log(ovenSum);

const avg =
  numArr.reduce((accumulator, currentValue) => currentValue + accumulator) /
  numArr.length;
console.log(avg);

// variant 2
const avg2 = numArr.reduce(
  (accumulator, currentValue) => currentValue / numArr.length + accumulator,
  0
);
console.log(avg2);
