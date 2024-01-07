'use strict';

// task 1

const x = 10;
const y = 7;

console.log(x > y ? 'x більше за y' : 'x не більше, ніж y');

// task 2

const num = prompt('Enter a number');
const numSign = num >= 0;
const numLength = numSign ? num.length : num.length - 1;

let numLengthStr;
switch (numLength){
    case 1 :
        numLengthStr = 'однозначне';
        break;
    case 2 :
        numLengthStr = 'двозначне';
        break;
    case 3 :
        numLengthStr = 'тризначне';
        break;
    default:
        numLengthStr = 'багатозначне';
}

console.log('Число ' + num + ' ' + numLengthStr + ' ' + (numSign ? 'позитивне' : 'негативне'))

// task 3

const num1 = +prompt('Введіть перше число');
const num2 = +prompt('Введіть друге число');
const num3 = +prompt('Введіть третє цисло');

let result;

if (num1 > num2) {
    result = num1;
} else {
    result = num2;
}
if (num3 > result){
    result = num3;
}
alert('Найбільше число: ' + result);

// task 4

const triangleSide1 = +prompt('Введіть довжину 1 сторони');
const triangleSide2 = +prompt('Введіть довжину 2 сторони');
const triangleSide3 = +prompt('Введіть довжину 3 сторони');

if ((triangleSide1 + triangleSide2) > triangleSide3 &&
    (triangleSide3 + triangleSide2) > triangleSide1 &&
    (triangleSide1 + triangleSide3) > triangleSide2) {

    console.log('Трикутник існує')
} else{
    console.log('Трикутник не існує')
}
