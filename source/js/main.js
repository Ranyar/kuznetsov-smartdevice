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

    if (shown === headers[i]) { //Если ОТКРЫТЫЙ элемент - тот, по которому кликнули
      content[i].classList.remove('accordion__content--show'); // Убрать у кликнутого ОТКРЫТЫЙ
      minused.classList.add('accordion--plus'); // Добавить элементу с минусом плюс
      minused.classList.remove('accordion--minus'); // Убрать у элемента с минусом минус
    } else if (minused) { // Иначе если есть элемент с минусом
        minused.classList.remove('accordion--minus'); // Убрать у элемента с минусом минус
        minused.classList.add('accordion--plus'); // Добавить элементу с минусом плюс
      }
      content[i].classList.add('accordion__content--show'); // Добавить кликнутому элементу ОТКРЫТЫЙ
      accordions[i].classList.remove('accordion--plus'); // Убрать у кликнутого элемента плюс
      accordions[i].classList.add('accordion--minus'); // Добавить кликнутому элементу минус

      if (shown) {
        shown.classList.remove('accordion__content--show'); // Если есть элемент с классом ОТКРЫТЫЙ, убрать класс
      }
  });
}
