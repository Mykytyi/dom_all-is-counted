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