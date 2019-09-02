'use strict';

window.onload = function () {
  var openPopap = document.querySelector('.header__call-link');
  var closePopap = document.querySelector('.popap__close');
  var popap = document.querySelector('.popap');

  openPopap.addEventListener('click', function (e) {
    e.preventDefault();
    popap.classList.remove('hidden');
  });

  closePopap.addEventListener('click', function (e) {
    e.preventDefault();
    popap.classList.add('hidden');
  });

  window.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
      e.preventDefault();
      popap.classList.add('hidden');
    }
  });
};
