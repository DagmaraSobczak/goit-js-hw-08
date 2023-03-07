import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');

function saveInLocalStorage() {
  const email = feedbackForm.elements.email;
  const message = feedbackForm.elements.message;
  const data = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

feedbackForm.addEventListener('input', () => {
  saveInLocalStorage();
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  saveInLocalStorage();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  feedbackForm.reset();
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
