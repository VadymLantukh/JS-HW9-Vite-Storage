const formEl = document.querySelector('.feedback-form');
const keyLocal = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const loadForms = JSON.parse(localStorage.getItem(keyLocal));
formEl.elements.email.value = loadForms?.email ?? '';
formEl.elements.message.value = loadForms?.message ?? '';

formData.email = formEl.elements.email.value;
formData.message = formEl.elements.message.value;

formEl.addEventListener('input', () => {
  localStorage.setItem(keyLocal, JSON.stringify(formData));
  formData.email = formEl.elements.email.value.trim();
  formData.message = formEl.elements.message.value.trim();
});

formEl.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  }

  localStorage.removeItem(keyLocal);
  formEl.reset();
  console.log(formData);
  formData.email = '';
  formData.message = '';
});
