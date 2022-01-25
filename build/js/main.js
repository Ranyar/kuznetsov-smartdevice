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
