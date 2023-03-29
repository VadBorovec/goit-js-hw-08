//* PAGE TITLE
const PAGE_TITLE = document.querySelector('.page-title');
const pageHeader = document.querySelector('.page-header');

document.title = PAGE_TITLE.textContent;
pageHeader.textContent = PAGE_TITLE.textContent;

//* HIDE BACK BTN
const backBtn = document.querySelector('.back-btn');

hideBackBtn();

function hideBackBtn() {
  if (PAGE_TITLE.textContent === 'Homework 8') {
    backBtn.classList.add('hidden');
  }
  return;
}
