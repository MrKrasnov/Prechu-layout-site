'use strict';
export function burger(){
    const header_burger = document.querySelector(".header-button");
    const close_button = document.querySelector(".cros > button");
    const mobile_nav_menu = document.querySelector(".nav_mobile");

    mobile_nav_menu.style.display = 'none';

    header_burger.onclick = function (){
        mobile_nav_menu.style.display = 'block';
    }

    close_button.onclick = function (){
        mobile_nav_menu.style.display = 'none';
    }
}