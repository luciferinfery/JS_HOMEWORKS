const myApply = (func, thisArg, argArr) => {
  const args = argArr && Array.isArray(argArr) ? argArr : [];
  const thisObj = thisArg;
  thisObj.customFunction = func;
  const result = thisObj.customFunction(...args);
  delete thisObj.customFunction;
  return result;
};
const person = {
  name: 'Ivan',
  age: 18,
};
const printName = function () {
  console.log(this.name);
};
printName();
myApply(printName, person);
