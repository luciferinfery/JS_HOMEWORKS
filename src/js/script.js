const checkNumber = () => {
  const input = +document.getElementById('textInput').value;
  if (Number.isNaN(input)) {
    alert('Введіть число!');
  } else {
    alert(input % 2 === 0 ? 'Парне число' : 'Непарне число');
  }
  console.log(input);
};
