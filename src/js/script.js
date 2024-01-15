'use strict';

const intervalEnd = 100;

const uniqueNumArr = [];

for (let i = 0; i <= intervalEnd; i++) {
    uniqueNumArr.push(i);
}

function getRandomUniqueNum() {
    if (uniqueNumArr.length === 0) {
        throw new Error('There is no unique values left')
    }
    const randomIndex = Math.round(Math.random() * (uniqueNumArr.length - 1));
    const result = uniqueNumArr[randomIndex];
    uniqueNumArr.splice(randomIndex, 1);
    return result;
}

for (let i = 0; i<= 101; i++){
    console.log(getRandomUniqueNum());
}

console.log(uniqueNumArr)

