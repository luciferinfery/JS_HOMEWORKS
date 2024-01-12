'use strict';

function generateKey(length, characters) {
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.round(Math.random() * (characters.length - 1));
        result = result + characters[randomIndex];
    }
    return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);
