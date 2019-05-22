'use strict';


let num = document.getElementById('counter');
localStorage.setItem('lcl_amountOfClicks', '0');

let amountOfClicks = localStorage.getItem('lcl_amountOfImg');

document.addEventListener('click', trackingClicks);

function trackingClicks() {
  num.innerHTML = +localStorage.getItem('lcl_amountOfImg') + 1;
  amountOfClicks++;
  localStorage.setItem('lcl_amountOfImg', amountOfClicks);
}

https://github.com/Mykytyi/dom_all-is-counted/commit/f837262b523918d0733ea96448be2018bfa6fd3e
https://mykytyi.github.io/dom_all-is-counted/