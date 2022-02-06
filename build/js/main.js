`use strict`;

// ----- Аккордеон

const accordions = document.querySelectorAll(`.accordion`);

if (accordions) {
  const headers = document.querySelectorAll(`.accordion h2`);
  const content = document.querySelectorAll(`.accordion__content`);

  for (let i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove(`accordion--nojs`);
    accordions[i].classList.add(`accordion--plus`);
  }

  for (let i = 0; i < headers.length; i++) {
    headers[i].addEventListener(`click`, () => {

      let shown = document.querySelector(`.accordion__content--show`);
      let minused = document.querySelector(`.accordion--minus`);

      if (shown === headers[i]) {
        content[i].classList.remove(`accordion__content--show`);
        accordions[i].classList.add(`accordion--plus`);
        accordions[i].classList.remove(`accordion--minus`);
      }

      content[i].classList.add(`accordion__content--show`);
      accordions[i].classList.remove(`accordion--plus`);
      accordions[i].classList.add(`accordion--minus`);

      if (shown) {
        shown.classList.remove(`accordion__content--show`);
        minused.classList.add(`accordion--plus`);
        minused.classList.remove(`accordion--minus`);
      }
    });
  }
}

// ----- Модальное окно

const pageBody = document.querySelector(`.page-body`);
const contactsButton = document.querySelector(`.button--contacts`);
const modal = document.querySelector(`.modal`);

if (modal) {
  const modalCallback = document.querySelector(`.modal--callback`);
  const nameCallback = modalCallback.querySelector(`input[name="name"]`);
  contactsButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    modalCallback.classList.add(`modal--show`);
    pageBody.classList.add(`page-body--no-scroll`);
    nameCallback.focus();
  });

  window.addEventListener(`keydown`, (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      if (modalCallback.classList.contains(`modal--show`)) {
        modalCallback.classList.remove(`modal--show`);
      } pageBody.classList.remove(`page-body--no-scroll`);
    }
  });

  modal.addEventListener(`click`, (evt) => {
    if (evt.target.classList.contains(`modal--show`) || evt.target.classList.contains(`modal__wrapper`) || evt.target.classList.contains(`modal__close`)) {
      modal.classList.remove(`modal--show`);
      pageBody.classList.remove(`page-body--no-scroll`);
    }
  });
}

// ----- Перехват фокуса в модальном окне

const firstElement = document.querySelector(`#modal-name`);
const lastElement = document.querySelector(`.modal__close`);

lastElement.addEventListener(`keydown`, function (event) {
  event.preventDefault();
  if (event.keyCode === 9) {
    firstElement.focus();
  }
});

// ----- local storage для модального окна

const modalNameInput = document.getElementById(`modal-name`);
const modalPhoneInput = document.getElementById(`modal-phone`);
const modalQuestionTextarea = document.getElementById(`modal-question`);

if (modal) {
  modalNameInput.value = localStorage.getItem(`modal-name`);
  modalPhoneInput.value = localStorage.getItem(`modal-phone`);
  modalQuestionTextarea.value = localStorage.getItem(`modal-question`);

  modalNameInput.addEventListener(`input`, () => {
    localStorage.setItem(`modal-name`, modalNameInput.value);
  });

  modalPhoneInput.addEventListener(`input`, () => {
    localStorage.setItem(`modal-phone`, modalPhoneInput.value);
  });

  modalQuestionTextarea.addEventListener(`input`, () => {
    localStorage.setItem(`modal-question`, modalQuestionTextarea.value);
  });

}

// ----- Local storage для формы обратной связи

const feedbackForm = document.querySelector(`.page-main__feedback`);

if (feedbackForm) {
  const feedbackNameInput = document.getElementById(`feedback-name`);
  const feedbackPhoneInput = document.getElementById(`feedback-phone`);
  const feedbackQuestionTextarea = document.getElementById(`feedback-question`);

  feedbackNameInput.value = localStorage.getItem(`feedback-name`);
  feedbackPhoneInput.value = localStorage.getItem(`feedback-phone`);
  feedbackQuestionTextarea.value = localStorage.getItem(`feedback-question`);

  feedbackNameInput.addEventListener(`input`, () => {
    localStorage.setItem(`feedback-name`, feedbackNameInput.value);
  });

  feedbackPhoneInput.addEventListener(`input`, () => {
    localStorage.setItem(`feedback-phone`, feedbackPhoneInput.value);
  });

  feedbackQuestionTextarea.addEventListener(`input`, () => {
    localStorage.setItem(`feedback-question`, feedbackQuestionTextarea.value);
  });
}

// ----- Маска с валидацией

window.addEventListener(`DOMContentLoaded`, function () {
  [].forEach.call(document.querySelectorAll(`.phone-input`), function (input) {
    let keyCode;
    function mask(event) {
      let pos = input.selectionStart;

      if (evt.key === 9) {
        return;
      } if (pos < 2) {
        event.preventDefault();
      }

      let matrix = `+7(___) _______`;
      let i = 0;
      let def = matrix.replace(/\D/g, ``);
      let val = input.value.replace(/\D/g, ``);
      let newValue = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = newValue.indexOf(`_`);
      if (i !== -1) {
        newValue = newValue.slice(0, i);
      }
      let reg = matrix.substr(0, input.value.length).replace(/_+/g,
          function (a) {
            return `\\d{1,` + a.length + `}`;
          }).replace(/[+()]/g, `\\$&`);
      reg = new RegExp(`^` + reg + `$`);
      if (!reg.test(input.value) || input.value.length < 5 || keyCode > 47 && keyCode < 58) {
        input.value = newValue;
      }
      if (event.type === `blur` && input.value.length < 5) {
        input.value = ``;
      }
      if (input.value.length < 15) {
        input.setCustomValidity(`Введите номер полностью`);
      } else {
        input.setCustomValidity(``);
      }
    }

    input.addEventListener(`input`, mask, false);
    input.addEventListener(`focus`, mask, false);
    input.addEventListener(`blur`, mask, false);
    input.addEventListener(`keydown`, mask, false);
  });
});
