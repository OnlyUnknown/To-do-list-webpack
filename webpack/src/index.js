import './style.css';
import add from './add.js';
import { event, adde } from './edit.js';
import remove from './remove.js';
import check from './module/completed.js';
import clearC from './module/clearCompleted.js';



let task = [];
if (localStorage.getItem('used') === null) {
  task = [];
} else {
  task = JSON.parse(localStorage.getItem('used'));
}



const flex = document.querySelector('.list');

for (let i = 0; i < task.length; i += 1) {
  flex.innerHTML += `<div class="flex-list"><input class="checker" type="checkbox"><div class="value-list"> ${task[i].discription} </div> <a class="right" href="#"><i class="fa-sharp fa-solid fa-ellipsis-vertical"></i></a><p class="index">${i + 1}</p></div>`;
}

let checkInp = document.querySelectorAll(".checker")

for(let i = 0; i < task.length; i += 1){
if(task[i].Completed === true){
  checkInp[i].checked = true
  checkInp[i].nextSibling.classList.toggle("checked")
}
}

const container = document.querySelector('.container');

const value = document.querySelector('.value');

const btn = document.createElement('button');
btn.classList.add('enter');

const btn2 = document.createElement('button');
btn2.classList.add('edit');

value.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.querySelector('.enter').click();
    value.value = '';
  }
});

const clear = document.createElement('div');
clear.classList.add('clear');
clear.innerHTML = 'Clear Completed';
container.appendChild(clear);
container.appendChild(btn);

document.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    adde(event);
    document.querySelector('.edit').click();
  }
});

clear.addEventListener("click", clearC)

document.addEventListener('click', remove);

btn.addEventListener('click', add);

document.addEventListener('click', event);

document.addEventListener('click', check)
