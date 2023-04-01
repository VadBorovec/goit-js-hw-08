import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form  input'),
  message: document.querySelector('.feedback-form  textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

populateForm();

// * Отримує значення введені в поля форми
// * Форматує їх  в рядок
// * Зберігає в localStorage

function onInput(evt) {
  formData[evt.target.name] = evt.target.value;
  const message = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, message);
}

// * Отримує рядок з localStorage
// * Парсить його в об'єкт
// * Якщо були дані, обновляє DOM

function populateForm() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const parsedMessage = JSON.parse(savedMessage);
  if (savedMessage) {
    refs.email.value = parsedMessage.email;
    refs.message.value = parsedMessage.message;
  }
}

// * Встановлює поведінку за замовчуванням
// * Виводить в консоль об'єкт з полями форми
// * Очищує форму
// * Прибирає повідомлення з lolcalStorage

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
