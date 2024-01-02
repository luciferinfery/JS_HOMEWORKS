'use strict';

const operation = prompt('Enter the operation(add, sub, mult, div)');
const a = parseInt(prompt('Enter first number'));
const b = parseInt(prompt('Enter second number'));

if (operation === 'add') {
    console.log(`${a} + ${b} = ${a + b}`);
} else if (operation === 'sub') {
    console.log(`${a} - ${b} = ${a - b}`);
} else if (operation === 'mult') {
    console.log(`${a} * ${b} = ${a * b}`);
} else if (operation === 'div') {
    console.log(`${a} / ${b} = ${a / b}`);
} else {
    console.log('Wrong operation!');
}

// Second variant

switch (operation) {
    case 'add':
        console.log(`${a} + ${b} = ${a + b}`);
        break;
    case 'sub':
        console.log(`${a} - ${b} = ${a - b}`);
        break;
    case 'mult':
        console.log(`${a} * ${b} = ${a * b}`);
        break;
    case 'div':
        console.log(`${a} / ${b} = ${a / b}`);
        break;
    default:
        console.log('Wrong operation!');
}
