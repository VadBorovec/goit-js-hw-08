import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form  input'),
  message: document.querySelector('.feedback-form  textarea'),
  submitBtn: document.querySelector('.feedback-form  button'),
};

let formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));
// refs.form.addEventListener('input', toggleSubmitBtn);

populateForm();

// * Вимикаєає кнопку за замовчуванням
// * Задає умови для перевірки кнопки Submit
// ! при інпуті (onInput(evt)) кнопка активується, при перезавантажені сторінки (populateForm()), якщо formData містить дані, чомусь не активується

refs.submitBtn.disabled = true;

function toggleSubmitBtn() {
  refs.submitBtn.disabled = !(
    (refs.email.value && refs.message.value) ||
    (formData.email.value && formData.message.value)
  );
}

// * Отримує значення введені в поля форми
// * Форматує їх в рядок
// * Зберігає в localStorage
// * Перевіряє чи активувати кнопку Submit

function onInput(evt) {
  formData[evt.target.name] = evt.target.value;
  const formDataString = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataString);
  toggleSubmitBtn();
}

// * Отримує рядок з localStorage
// * Парсить його в об'єкт
// * Якщо були дані, записує у форму та обновляє DOM
// * Перевіряє чи активувати кнопку Submit

function populateForm() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const parsedMessage = JSON.parse(savedMessage);
  if (parsedMessage) {
    formData = parsedMessage;
    refs.email.value = formData.email || '';
    refs.message.value = formData.message || '';
    // console.log(formData);
    toggleSubmitBtn();
  }
}

// * Встановлює поведінку за замовчуванням
// * Виводить в консоль об'єкт з полями форми
// * Очищує форму
// * Прибирає повідомлення з lolcalStorage
// * Вимикає кнопку Submit

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  refs.submitBtn.disabled = true;
}
