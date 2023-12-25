'use strict';

const student = {
    name: 'Alice',
    age: 18,
    grade: 1
};

student.grade = 2;
student.course = 'math';

console.log('Student', student);


const book = {
    title: 'Bible',
    author: 'God',
    year: -Infinity
}

book.publisher = {
    name: 'Angel',
    location: 'Heaven'
}

console.log('Book', book);


const movie = {
    title: 'Titanic',
    director: 'James Cameron',
    year: 1997,
    genre: 'drama'
}

for (const property in movie) {
    console.log(`${property}: ${movie[property]}`);
}


const person1 = {
    name: 'Alice',
    age: 18,
}
const person2 = {
    name: 'Joe',
    age: 60,
}
const person3 = {
    ...person1
}

console.log(person1 === person2);
function isEqual(obj1, obj2) {
    for (const property in obj1) {
        if (obj1[property] !== obj2[property]) {
            return false;
        }
    }
    for (const property in obj2) {
        if (obj1[property] !== obj2[property]) {
            return false;
        }
    }
    return true;
}

console.log(isEqual(person1, person2));
console.log(isEqual(person1, person3));

const animals = [
    {
        type: 'tiger',
        name: 'Pusia'
    }
];
animals.push({ type: 'cheetah', name: 'Killer'});

console.log('Animals', animals);
