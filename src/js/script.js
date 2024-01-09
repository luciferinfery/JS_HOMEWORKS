'use strict';

const arr = [1, 2, 3, 4, 5];

let sum = 0;
let sumPow = 0;

for (const value of arr) {
    sum = sum + value;
    sumPow = sumPow + value ** 2;
}

console.log('сума елементів', sum);
console.log('сума квадратів елементів', sumPow);
