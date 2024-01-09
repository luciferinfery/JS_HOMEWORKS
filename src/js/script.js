'use strict';

let result;
for(let num = 20; num <= 30; num += 0.5) {
    if (!result) {
        result = String(num);
    } else {
        result = `${result} ${num}`;
    }
}
console.log(result)