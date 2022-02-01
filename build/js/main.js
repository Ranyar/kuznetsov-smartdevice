const accordions = document.querySelectorAll('.accordion');
const headers = document.querySelectorAll('.accordion h2');
const content = document.querySelectorAll('.accordion__content');

for (let i = 0; i < accordions.length; i++) {
  accordions[i].classList.remove('accordion--nojs');
  accordions[i].classList.add('accordion--plus');
}

for (let i=0; i < headers.length; i++) {
  headers[i].addEventListener('click', () => {

    let shown = document.querySelector('.accordion__content--show');
    let minused = document.querySelector('.accordion--minus');

    if (shown === headers[i]) {
      content[i].classList.remove('accordion__content--show');
      accordions[i].classList.add('accordion--plus');
      accordions[i].classList.remove('accordion--minus');
    }

    content[i].classList.add('accordion__content--show');
    accordions[i].classList.remove('accordion--plus');
    accordions[i].classList.add('accordion--minus');

    if (shown) {
      shown.classList.remove('accordion__content--show');
      minused.classList.add('accordion--plus');
      minused.classList.remove('accordion--minus');
    }
  });
}

//----- Модалки

const pageBody = document.querySelector('.page-body');
const contactsButton = document.querySelector('.button--contacts');

const modal = document.querySelector('.modal');
const modalCallback = document.querySelector('.modal--callback');
const nameCallback = modalCallback.querySelector('input[name="name"]');

contactsButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalCallback.classList.add('modal--show');
  pageBody.classList.add('page-body--no-scroll');
  nameCallback.focus();
});

window.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    if (modalCallback.classList.contains('modal--show')) {
      modalCallback.classList.remove('modal--show');
    } pageBody.classList.remove('page-body--no-scroll');
  }
});

modal.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('modal--show') || evt.target.classList.contains('modal__wrapper') || evt.target.classList.contains('modal__close')) {
    modal.classList.remove('modal--show');
    pageBody.classList.remove('page-body--no-scroll');
  }
});
