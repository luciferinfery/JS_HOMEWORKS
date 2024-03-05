const ulElement = document.getElementById('ulId');
const attrArr = [];
const attrValueArr = [];

for (const attribute of ulElement.attributes) {
  attrValueArr.push(attribute.value);
  attrArr.push(attribute.name);
}
console.log(attrValueArr);
console.log(attrArr);

const name = 'Федор';

const lastLiElement = document.querySelector('ul li:last-child');
lastLiElement.textContent = `Привет меня зовут ${name}`;
console.log(lastLiElement);

const firstLiElement = document.querySelector('ul li:first-child');
firstLiElement.setAttribute('data-my-name', name);
console.log(firstLiElement);

ulElement.removeAttribute('data-dog-tail');
console.log(ulElement.attributes);
