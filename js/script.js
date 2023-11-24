'use strict';
document.addEventListener('DOMContentLoaded', e => {
    const menu = document.querySelector('.header_menu'),
          btn = document.querySelector('.header_hamburger');

    btn.addEventListener('click', e => {
        menu.classList.toggle('header_menu_active');
        btn.classList.toggle('header_hamburger_active');
    })
})