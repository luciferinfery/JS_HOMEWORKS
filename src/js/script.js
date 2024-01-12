'use strict';

function padString(str, len, char = '*', isRight = true) {
    if (!str || typeof str !== 'string') {
        return 'помилка, це не рядок';
    }

    if (!len || typeof len !=='number' || isNaN(len) || len <= 0) {
        return 'помилка, хибна довжина';
    }

    if (typeof char !== 'string' || char.length !== 1 ) {
        return 'помилка, символ не корректний';
    }

    if (typeof isRight !== 'boolean') {
        return 'помилка, сторона вказана не вірно';
    }
    let result = '';

    if (len <= str.length) {
        result = str.substring(0, len);
    } else {
        const calc = len - str.length;
        for (let i =  0; i < calc ; i++) {
            result = result + char;
        }

        result = isRight ? str + result : result + str;
    }
    return result;
}


console.log(padString('привіт', 7, '*', false));
console.log(padString('привіт', 8));
console.log(padString('привіт', 5));
