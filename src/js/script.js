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
    name: 'Alice',
    age: 18,
}

console.log(person1 === person2);

for(const key in person1) {
    console.log(key, person1[key] === person2[key])
}


const animals = [
    {
        type: 'tiger',
        name: 'Pusia'
    }
];
animals.push({ type: 'cheetah', name: 'Killer'});

console.log('Animals', animals);
