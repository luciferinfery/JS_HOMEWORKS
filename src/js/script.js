const myBind = (func, thisArg, ...argArr) => {
  const myApply = (func1, thisArg1, argArr1) => {
    const args = argArr1 && Array.isArray(argArr1) ? argArr1 : [];
    const thisObj = thisArg1;
    thisObj.customFunction = func1;
    const result = thisObj.customFunction(...args);
    delete thisObj.customFunction;
    return result;
  };

  return function (...restArgs) {
    return myApply(func, thisArg, [...argArr, ...restArgs]);
  };
};

const person = {
  name: 'Ivan',
  age: 18,
};
const printName = function () {
  console.log(this.name);
};

const newPrintName = myBind(printName, person);
newPrintName();
