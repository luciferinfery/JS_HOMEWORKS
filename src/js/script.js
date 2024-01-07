'use strict';

const age = prompt('Введіть ваш вік');

if (age && +age) {
    const lastDigit = +age[age.length - 1];
    const lastTwoDigits = +(age[age.length - 2] + age[age.length - 1]);

    let nameAge;
    if (lastTwoDigits && lastTwoDigits >= 11 && lastTwoDigits <= 15) {
        nameAge = 'років';
    } else if (lastDigit === 1) {
        nameAge = 'рік';
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        nameAge = 'роки';
    } else if (lastDigit >= 5 && lastDigit <= 9 || lastDigit === 0) {
        nameAge = 'років';
    }
    console.log(age, nameAge);

} else {
    console.log('Invalid number!')
}