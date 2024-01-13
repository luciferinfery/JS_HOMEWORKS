'use strict';

function validateArr(arr) {
    const result = { isError: false, message: '' };

    if (!Array.isArray(arr)) {
        result.isError = true;
        result.message = 'Given argument is not array';
        return result;
    }

    if (arr.length === 0) {
        result.isError = true;
        result.message = 'Array is empty';
        return result;
    }

    return result;
}

function getPositives(arr123) {
    const validation = validateArr(arr123);

    if (validation.isError) {
        return validation.message;
    }

    const resultArr = [];

    for (let i = 0; i <= arr123.length -1; i++) {
       if (arr123[i] > 0) {
           resultArr.push(arr123[i]);
       }
    }
    if (resultArr.length === 0) {
        return null;
    }
    return resultArr;
}

const arr = [1, 2, 3, -1, -2, -3];

const result = getPositives(arr);
console.log(result);
console.log(getPositives([]));
console.log(getPositives([-1, -2, -3]));
console.log(getPositives(''));
console.log(getPositives(1));