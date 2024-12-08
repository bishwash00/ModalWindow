'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalbtn = document.querySelector('.close-modal');
const showModalbtn = document.querySelectorAll('.show-modal');
const hide = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const show = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < showModalbtn.length; i++) {
  showModalbtn[i].addEventListener('click', show);
}
closeModalbtn.addEventListener('click', hide);
overlay.addEventListener('click', hide);
if (modal.classList.contains('hidden')) {
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      hide();
    }
  });
}
