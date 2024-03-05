const generateList = (arr) => {
  const ul = document.createElement('ul');
  for (let i = 0; i < arr.length; i += 1) {
    const li = document.createElement('li');
    if (Array.isArray(arr[i])) {
      li.appendChild(generateList(arr[i]));
    } else {
      li.textContent = arr[i];
    }
    ul.appendChild(li);
  }
  return ul;
};

const array = [1, 2, [1.1, 1.2, 1.3], 3];
const list = generateList(array);
document.body.appendChild(list);
console.log(list);
