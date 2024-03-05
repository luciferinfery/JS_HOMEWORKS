const liElements = document.querySelectorAll('ul#ulId li');
const textArray = [];

for (const liElement of liElements) {
  console.log(liElement.textContent);
  textArray.push(liElement.textContent.trim());
}

console.log('Загальна кількість елементів:', liElements.length);
console.log('Масив текстів:', textArray);
