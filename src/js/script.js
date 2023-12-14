'use strict';

const operand1 = Number(prompt("Enter the first operand: "));
const operand2 = Number(prompt("Enter the second operand: "));

const sum = operand1 + operand2;
console.log(`Результат: ${operand1} + ${operand2} = ${sum}`);

const minus = operand1 - operand2;
console.log(`Результат: ${operand1} - ${operand2} = ${minus}`);

if (operand2 !== 0) {
    const divide = operand1 / operand2;
    console.log(`Результат: ${operand1} / ${operand2} = ${divide}`);
} else {
    console.log("Error: You cannot divide by 0");
}

const multiplication = operand1 * operand2;
console.log(`Результат: ${operand1} * ${operand2} = ${multiplication}`);

