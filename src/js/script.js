const runCallbacks = function (callbackArr, value) {
  let acc = value;

  for (let i = 0; i < callbackArr.length; i += 1) {
    const currentCallback = callbackArr[i];
    acc = currentCallback(acc);
  }
  return acc;
};
const addOne = (x) => x + 1;
const square = (x) => x * x;
const callbacks = [addOne, square, addOne];
const result = runCallbacks(callbacks, 1);
console.log(result);

const composeFunctions = function (...funcs) {
  return (x) => {
    let acc = x;
    for (let i = funcs.length - 1; i >= 0; i -= 1) {
      acc = funcs[i](acc);
    }
    return acc;
  };
};

const double = (x) => x * 2;
const negate = (x) => -x;
const composedFunction = composeFunctions(double, square, negate);
console.log(composedFunction(2));
