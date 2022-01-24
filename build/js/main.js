'use strict';

const accordions = document.querySelectorAll('.accordion');
const headers = document.querySelectorAll('.accordion h2');

console.log(headers);

// accordions.classList.remove('accordion--nojs');

// const pageBody = document.querySelector('.page-body');
// const mainNav = document.querySelector('.main-nav');
// const mainNavItems = document.querySelectorAll('.main-nav__item');
// const navToggle = document.querySelector('.main-nav__toggle');
//
// mainNav.classList.remove('main-nav--nojs');
//
// navToggle.addEventListener('click', function () {
//   if (mainNav.classList.contains('main-nav--opened')) {
//     pageBody.classList.remove('page-body--lock');
//     mainNav.classList.remove('main-nav--opened');
//     navToggle.classList.add('main-nav__toggle--closed');
//   } else {
//     mainNav.classList.add('main-nav--opened');
//     pageBody.classList.add('page-body--lock');
//     navToggle.classList.remove('main-nav__toggle--closed');
//   }
// });
//
// for (let i = 0; i < mainNavItems.length; i++) {
//   mainNavItems[i].addEventListener('click', function () {
//     if (mainNav.classList.contains('main-nav--opened')) {
//       pageBody.classList.remove('page-body--lock');
//       mainNav.classList.remove('main-nav--opened');
//       navToggle.classList.add('main-nav__toggle--closed');
//     }
//   });
// }
