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
      accordions[i].classList.add('accordion--plus'); // Добавить кликнутому с минусом плюс
      accordions[i].classList.remove('accordion--minus'); // Убрать у кликнутого элемента минус
    }
    // Если кликнули по другому элементу
    content[i].classList.add('accordion__content--show'); // Добавить кликнутому элементу ОТКРЫТЫЙ
    accordions[i].classList.remove('accordion--plus'); // Убрать у кликнутого элемента плюс
    accordions[i].classList.add('accordion--minus'); // Добавить кликнутому элементу минус

    if (shown) { //При этом, если есть другой элемент с классом ОТКРЫТЫЙ
      shown.classList.remove('accordion__content--show'); // убрать класс ОТКРЫТЫЙ
      minused.classList.add('accordion--plus'); // Добавить элементу с минусом плюс
      minused.classList.remove('accordion--minus'); // Убрать у элемента с минусом минус
    }
  });
}
