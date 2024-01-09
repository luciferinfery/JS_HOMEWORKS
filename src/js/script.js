'use strict';

let numSum = 0;
loop:
    for (let num = 1; num <= 20; num++) {
        if (num % 2 === 0) {
            continue loop;
        }

        numSum = numSum + num;
    }
console.log(numSum);