'use strict';

function padString(str, len, char = '*', isRight = true) {
    if (!str || typeof str !== 'string') {
        throw new Error('помилка, це не рядок');
    }

    if (!len || typeof len !=='number' || len <= 0) {
        throw new Error('помилка, хибна довжина');
    }

    if (len <= str.length) {
        return str.substring(0, len);
    }

    if (typeof char !== 'string' || char.length !== 1) {
        throw new Error('помилка, символ не корректний');
    }

    if (typeof isRight !== 'boolean') {
        throw new Error('помилка, сторона вказана не вірно');
    }
    let result = '';
    const calc = len - str.length;

    for (let i =  0; i < calc ; i++) {
        result = result + char;
    }

    return isRight ? str + result : result + str;
}


console.log(padString('привіт', 7, '*', false));
console.log(padString('привіт', 8));
console.log(padString('привіт', 5));
