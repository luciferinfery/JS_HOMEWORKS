const reduse = function (arr, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : arr[0];
  const startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < arr.length; i += 1) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const sum = reduse(
  arr,
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);
