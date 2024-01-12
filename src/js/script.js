'use strict';

const num = +prompt('Enter a number');

for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
        console.log('Найменший дільник:', i);
        break;
    }
}

if (num <= 1) {
    console.log(NaN);
}
