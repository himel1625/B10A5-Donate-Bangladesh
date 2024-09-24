'use strict';
const menu = document.getElementById('menu');
const menuItem = document.getElementById('menu-item');
menu.addEventListener('click', function () {
  menuItem.classList.toggle('hidden');
});

