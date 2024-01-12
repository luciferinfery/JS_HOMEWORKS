'use strict';

const num = +prompt('Enter a number');

let resultNum = NaN;

for (let i = 2; i <= num; i++) {
    if (num === 1) {
        resultNum = i;
        break;
    }
}

console.log(resultNum);