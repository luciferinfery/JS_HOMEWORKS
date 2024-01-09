'use strict';

// task 1

let result;
for(let num = 20; num <= 30; num += 0.5) {
    if (!result) {
        result = String(num);
    } else {
        result = `${result} ${num}`;
    }
}
console.log(result)

// task 2

const rate = 27;

for (let i = 10; i <= 100; i += 10) {
    console.log(`${i} USD * ${rate} = ${rate * i} UAH`);
}

// task 3

const intNum = 1100;

console.log(`всі цілі числа від 1 до 100, квадрат яких не перевищує числа ${intNum}.`)

for (let i = 1 ; i <= 100; i++) {
    const square = i ** 2;
    if (square > intNum) {
        break;
    }
    console.log(square, i)
}

// task 4

let isSimple = true;
for (let i = 2; i <= intNum / 2; i++) {
    if (intNum % i === 0 ) {
        isSimple = false;
        break;
    }
}
console.log(isSimple ? 'Число просте' : 'Число складене' );

// task 5

const xNum = 81;

let power = 1;
let is3inPower = false;

while (3 ** power <= xNum) {
    if (3 ** power === xNum){
        is3inPower = true;
        break;
    }
    power++;
}

console.log(is3inPower ? 'Число в степені з основою 3' : 'Число не в степені з основою 3' );
