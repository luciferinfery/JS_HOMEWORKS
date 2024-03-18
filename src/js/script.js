const saveData = () => {
  const textarea = document.querySelector('textarea#input-area');
  const container = document.querySelector('div#output');

  const newElement = document.createElement('p');
  newElement.innerHTML = textarea.value;
  container.prepend(newElement);
  textarea.value = '';
};
document.getElementById('btn').addEventListener('click', saveData);
