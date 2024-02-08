const numbers = [1, 2, 3, 4, 5];
// 1. indexOf

const indexOf = (arr, value, startIndex = 0) => {
  const start = startIndex < 0 ? startIndex + arr.length : startIndex;

  for (let i = start; i < arr.length; i += 1) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
};

console.log(indexOf(numbers, 2, -3));

// 2. lastIndexOf

const lastIndexOf = (arr, value, fromIndex = arr.length - 1) => {
  const start = fromIndex < 0 ? 0 : fromIndex;
  for (let i = start; i >= 0; i -= 1) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
};
const numbersSet2 = [1, 2, 3, 4, 5, 1];
console.log(lastIndexOf(numbersSet2, 1, 2));

// 3. find

const find = (arr, callback) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i)) {
      return arr[i];
    }
  }
  return undefined;
};
const numbersSet3 = [1, 2, 3, 4, 5, 1, 4, 5];
console.log(find(numbersSet3, (element) => element ** 2 === 4));

// 4. findIndex
const findIndex = (arr, callback) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i)) {
      return i;
    }
  }
  return -1;
};
const numbersSet4 = [1, 2, 3, 4, 5, 1, 4, 5];
console.log(findIndex(numbersSet4, (element) => element ** 2 === 4));

// includes

const includes = (arr, value, startIndex = 0) => {
  const start = startIndex < 0 ? startIndex + arr.length : startIndex;

  for (let i = start; i < arr.length; i += 1) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
};

console.log(includes(numbers, 2, -3));

// every

const every = (arr, callback) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};
const numbersSet5 = [1, 2, 3, 4, 5, 1, 4, 5];
console.log(every(numbersSet5, (element) => element ** 2 > 0));

// some

const some = (arr, callback) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};

console.log(some(numbersSet5, (element) => element ** 2 > 20));
