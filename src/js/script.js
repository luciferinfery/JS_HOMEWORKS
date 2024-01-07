'use strict';

const a = 1;
const b = 4;
console.log('a дорівнює нулю:', a === 0 ? 'Вірно' : 'Неправильно');
console.log('a більша за нуль:', a > 0 ? 'Вірно' : 'Неправильно');
console.log('a менша за нуль:', a < 0 ? 'Вірно' : 'Неправильно');
console.log('a більша або дорівнює нулю:', a >= 0 ? 'Вірно' : 'Неправильно');
console.log('a менша або дорівнює нулю:', a <= 0 ? 'Вірно' : 'Неправильно');
console.log('a не дорівнює нулю:', a !== 0 ? 'Вірно' : 'Неправильно');
console.log('a дорівнює \'test\':', a === 'test' ? 'Вірно' : 'Неправильно');
console.log('a дорівнює \'1\' і за значенням і типом:', a === '1' ? 'Вірно' : 'Неправильно');
console.log('a більша за нуль і менше 5-ти:', a > 0 && a < 5 ? 'Вірно' : 'Неправильно');
console.log('a дорівнює нулю або дорівнює двом, додайте до неї 7, інакше поділіть її на 10:',
    a === 0 || a === 2 ? a + 7 : a / 10);
console.log('a дорівнює або менше 1, а змінна b більша або дорівнює 3:',
    a <= 1 && b >= 3 ? a + b : a - b);
console.log('a більше 2-х і менше 11-ти, або змінна b більша або дорівнює 6-ти і менше 14-ти:',
    a > 2 && a < 11 || b >= 6 && b < 14 ? 'Вірно' : 'Невірно');

const num = 1;
let result;
switch (num){
    case 1:
        result = 'Winter';
        break;
    case 2:
        result = 'Spring';
        break;
    case 3:
        result = 'Summer';
        break;
    case 4:
        result = 'Autumn';
        break;
    default:
        console.log('Wrong value!');
}

console.log(result);
