'use strict';

const year = +prompt('Enter year of birth');
const city = prompt('Enter your sity');
const sport = prompt('Enter your love sport');

let age;

if (year) {
    age = new Date().getFullYear() - year;
} else {
    age = 'Шкода, що Ви не захотіли ввести свій рік народження'
}

let living;

if (city) {
    switch (city) {
        case 'Київ':
            living = 'Ти живеш у столиці України';
            break;
        case 'Вашингтон':
            living = 'Ти живеш у столиці США';
            break;
        case 'Лондон':
            living = 'Ти живеш у столиці Великобританії';
            break;
        default:
            living = 'Ти живеш в місті ' + city;
    }
} else {
    living = 'Шкода, що Ви не захотіли ввести де ви живете'
}

let sportsman;

if (sport) {
    switch (sport) {
        case 'Бокс':
            sportsman = 'Круто! Хочеш стати Володимиром Кличко?';
            break;
        case 'Футбол':
            sportsman = 'Круто! Хочеш стати Андрієм Шевченко?';
            break;
        case 'Хоббихорсинг':
            sportsman = 'Круто! Хочеш стати Алісою Арніомакі?';
            break;
        default:
            sportsman = 'Дивний вибір виду спорту!'
    }
} else {
    sportsman = 'Шкода, що Ви не захотіли ввести вид спорту'
}
alert(age + '\n' + living + '\n' + sportsman)
