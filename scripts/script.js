'use strict';


const num = document.getElementById('counter');
const storage = window.localStorage;
let increment = 1;
storage.setItem('lcl_amountOfClicks', '0');

let amountOfClicks = localStorage.getItem('lcl_amountOfImg');

document.addEventListener('click', trackingClicks);

function trackingClicks() {
  num.innerHTML = +localStorage.getItem('lcl_amountOfImg') + increment;
  amountOfClicks++;
  localStorage.setItem('lcl_amountOfImg', amountOfClicks);
}
