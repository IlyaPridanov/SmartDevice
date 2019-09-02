'use strict';

window.onload = function () {

  var openPopap = document.querySelector('.header__call-link');
  var closePopap = document.querySelector('.popap__close');
  var popap = document.querySelector('.popap');
  var name = document.querySelector('#popap-name');
  var tel = document.querySelector('#popap-tel');
  var textbox = document.querySelector('#textbox');

  openPopap.addEventListener('click', function (e) {
    e.preventDefault();
    popap.classList.remove('hidden');
    name.focus();
  });

  popap.addEventListener('click', function (event) {
    console.log(event.target);
    if (event.target === this) {
      popap.classList.add('hidden');
      name.blur();
    }
  });

  closePopap.addEventListener('click', function (e) {
    e.preventDefault();
    name.blur();
    popap.classList.add('hidden');
  });

  window.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
      e.preventDefault();
      name.blur();
      popap.classList.add('hidden');
    }
  });

  var getLocalSave = function (input) {
    input.addEventListener('change', function () {
      // eslint-disable-next-line no-invalid-this
      localStorage.setItem(this.name, this.value);
    });
  };

  getLocalSave(name);
  getLocalSave(tel);
  getLocalSave(textbox);
};
