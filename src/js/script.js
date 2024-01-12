'use strict';

const num = +prompt('Enter the number');
const power = +prompt('Enter power of number');

function pow(num, power = 1) {
    if (isNaN(num) || isNaN(power)) {
        return 'Error';
    }
    return num ** power;
}

let result = pow(num, power);
alert('Результат в степині: ' + result);