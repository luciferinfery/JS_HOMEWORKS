const validate = (event) => {
  event.preventDefault();
  const inpData = Array.from(
    document.querySelectorAll(
      'input[type=text], input[type=email], input[type=password]'
    )
  ).reduce((accum, item) => {
    accum[item.type] = item.value;
    return accum;
  }, {});

  const message = document.createElement('div');
  message.className = 'message-box';

  if (inpData.text && inpData.email && inpData.password) {
    message.innerHTML = 'Реєстрація успішна';
    message.className += ' validation-success';
  } else {
    message.innerHTML = 'Будь ласка, заповніть усі поля';
    message.className += ' validation-error';
  }

  document.querySelector('div.message-container').append(message);
};

document.querySelector('button').addEventListener('click', validate);
