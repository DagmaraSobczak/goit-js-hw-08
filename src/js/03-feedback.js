const feedbackForm = document.querySelector('.feedback-form');

function saveInLocalStorage(textContent) {
  localStorage.setItem('feedback-form-state', textContent);
  return textContent;
}
feedbackForm.addEventListener('input', event => {
  feedbackForm.textContent = saveInLocalStorage(event.target.textContent);
});

update();
form.addEventListener('submit', saveData);

function saveData(event) {
  event.preventDefault();
  localStorage.setItem(
    'feedback-form-state',
    saveInLocalStorage(event.target.textContent)
  );
  update();
  form.reset();
  localStorage.clear();
  feedbackForm.elements.email.value = '';
  feedbackForm.elements.message.value = '';
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(data);
}
function update() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data) {
    feedbackForm.elements.email.value = data.email;
    feedbackForm.elements.message.value = data.message;
  }
}

const throttledActualization = throttle(saveInLocalStorage, 500);
