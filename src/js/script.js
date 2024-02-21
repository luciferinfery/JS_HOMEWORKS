const flat = (arr, ...rest) => {
  if (rest.length > 0) {
    throw new Error(
      'Function accepts only 1 argument, too much arguments provided'
    );
  }
  const newArr = [];
  const flattenArr = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
      if (Array.isArray(arr[i])) {
        flattenArr(arr[i]);
      } else {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  };
  return flattenArr(arr);
};
const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],
];
console.log(flat(complexArray));
