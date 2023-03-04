import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');

function saveInLocalStorage() {
  const email = feedbackForm.elements.email;
  const message = feedbackForm.elements.message;
  const data = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

feedbackForm.addEventListener('input', () => {
  saveInLocalStorage();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  saveInLocalStorage();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  form.reset();
  localStorage.clear();
});

function update() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data) {
    feedbackForm.elements.email.value = data.email;
    feedbackForm.elements.message.value = data.message;
  }
}

update();
const throttledActualization = throttle(saveInLocalStorage, 500);
