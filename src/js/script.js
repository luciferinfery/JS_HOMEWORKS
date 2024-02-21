const getFactorial = function (num) {
  if (num === 0) {
    return 1;
  }
  return num * getFactorial(num - 1);
};

console.log(getFactorial(9));

const pow = (num, degree) => {
  if (degree === 0) {
    return 1;
  }
  return num * pow(num, degree - 1);
};

console.log(pow(2, 3));

const plus = (a, b) => {
  if (a === 0) {
    return b;
  }
  let newB = b;
  newB += 1;
  return plus(a - 1, newB);
};
console.log(plus(10, 9));
