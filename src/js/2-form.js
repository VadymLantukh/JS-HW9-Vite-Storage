const formEl = document.querySelector('.feedback-form');
const keyLocal = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

formEl.addEventListener('input', () => {
  localStorage.setItem(keyLocal, JSON.stringify(formData));
  formData.email = formEl.elements.email.value.trim();
  formData.message = formEl.elements.message.value.trim();
});

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const email = formEl.elements.email.value.trim();
  const message = formEl.elements.message.value.trim();

  if (email === '' || message === '') {
    return alert('Fill please all fields');
  }

  console.log(formData);
  localStorage.removeItem(keyLocal);
  formEl.reset();
});

document.addEventListener('DOMContentLoaded', () => {
const loadForms = JSON.parse(localStorage.getItem(keyLocal));
formEl.elements.email.value = loadForms?.email ?? '';
formEl.elements.message.value = loadForms?.message ?? '';
});