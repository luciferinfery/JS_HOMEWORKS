'use strict';

// task 1
let result1;
for (let num = 10; num <= 20; num++) {
    if(!result1) {
        result1 = String(num);
    } else {
        result1 = `${result1}, ${num}`;
    }
}
console.log('через кому числа від 10 до 20: ' + result1);

// task 2
for (let num = 10; num <= 20; num++) {
    let square = num * num;
    console.log(`Квадрат числа ${num} : ${square}`);
}

// task 3
const multiplier = 7;
for (let num = 1; num <= 10; num++) {
    console.log(`${multiplier} * ${num} = ${num * multiplier}`);
}

// task 4
let result4 = 0;
for (let num = 1; num <= 15; num++) {
    result4 = result4 + num;
}
console.log('суму всіх цілих чисел від 1 до 15:' + result4);

// task 5
let result5 = 1n;
for (let num = 15n; num <= 35n; num++) {
    result5 = result5 * num;
}
console.log('добуток усіх цілих чисел від 15 до 35: ', result5);

// task 6
let result6 = 0;
let num;
for (num = 1; num <=500; num++) {
    result6 = result6 + num;
}
console.log('середнє арифметичне всіх цілих чисел від 1 до 500:', result6 / (num - 1));

// task 7
let result7 = 0;
for (num = 30; num <= 80; num+=2) {
    result7 = result7 + num;
}
console.log('Вивести суму лише парних чисел в діапазоні від 30 до 80 :', result7);

// task 8
let result8;
for(num = 100; num <= 200; num++) {
    if (num % 3 === 0) {
        if (result8) {
            result8 = `${result8}, ${num}`;
        } else {
            result8 = String(num);
        }
    }
}
console.log('всі числа в діапазоні від 100 до 200 кратні 3:', result8);

// task 9/10/11
const naturalNum = 256;

let result9;
let resultOvenCount = 0;
let resultOvenSum = 0;
for (num = 1; num <= naturalNum; num++) {
    if (naturalNum % num === 0) {
        if (result9) {
            result9 = result9 + ', ' + num;
        } else {
            result9 = String(num);
        }

        if (num % 2 === 0) {
            resultOvenCount++;
            resultOvenSum = resultOvenSum + num;
        }
    }
}
console.log('натуральне число. Знайти та вивести на сторінку всі його дільники:', result9);
console.log('кількість його парних дільників:', resultOvenCount);
console.log('Знайти суму його парних дільників:', resultOvenSum);


// task 12
console.log('Надрукувати повну таблицю множення від 1 до 10.:')
for(let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${j * i}`);
    }
}

