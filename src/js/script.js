// В першому прикладі консоль виведе undefined
// тому що ми викликаєм змінну(var) 'a' перед її ініциалізацією.

// У другому прикладі виведе Hello, world! тому що тут спрацьовує механізм підняття,
//     ми запускаемо наш код компілятор JS бере всі строчки де оголошуються функціі та піднімає
// їх у гору щоби ця фукція стала доступна

// у третьому прикладі консоль виведе Cannot access 'b' before initialization тому що
// ще не ініціалізована. Коли ми викликаємо змінну Б вона піднімається у гору але ще
// не ініциалізується, потрапляючи в TDZ

// У 4 прикладі буде виведено Hello from arrow function
// Це звичайне використання function expression та виклик функціі після її декларації.

// 1.Hoisting призводить до успішного виконання коду.

console.log(add(7, 8));
function add(a, b) {
  return a + b;
}

// 2. Hoisting призводить до помилки. Поясніть, чому сталася помилка.

mult(6, 7);
const mult = (a, b) => a * b;

// Тому що константа знаходиться в TDZ на момент звернення до неї.
