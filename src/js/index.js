import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();


const glassCounter = document.querySelector(".hydrapp__glass-counter--js");
const incrementCounter = document.querySelector(".hydrapp__buttons-increase--js");
const decreaseCounter = document.querySelector(".hydrapp__buttons-decrease--js");
var counter = 0;
var key = new Date().toISOString().slice(0,10);
function updateTheDate() {
    if (Object.keys(window.localStorage).includes(key)) {
        counter = localStorage.getItem(key);
        glassCounter.innerHTML = counter;
    } else {
        localStorage.setItem(key, 0);
    }
};
function addGlass() {
    counter++;
    glassCounter.innerHTML = counter;
    localStorage.setItem(key, counter);
};
function removeGlass() {
    if(counter > 0) {
        counter--;
        glassCounter.innerHTML = counter;
        localStorage.setItem(key, counter);
    }; 
};
updateTheDate();
incrementCounter.addEventListener('click', addGlass);
decreaseCounter.addEventListener('click', removeGlass);

