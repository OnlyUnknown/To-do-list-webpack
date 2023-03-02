import './style.css';
import { add } from './add';
import { event } from './remove';

const list = [
  {
    index: 0,
    discription: 'shooping',
    completed: true,
  },
  {
    index: 1,
    discription: 'washing my car',
    completed: false,
  },
  {
    index: 2,
    discription: 'doing farm works',
    completed: false,
  },

];

const flex = document.querySelector('.list');

list.forEach((task) => {
  flex.innerHTML += `<div class="flex-list"><input type="checkbox"> ${task.discription} <a class="right" href="#"><i class="fa-sharp fa-solid fa-ellipsis-vertical"></i><a><div>`;
});


let container = document.querySelector(".container")


const value = document.querySelector(".value")
const btn = document.createElement("button");
btn.classList.add("enter");

value.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".enter").click();
  }
});

const clear = document.createElement('div');
clear.classList.add('clear');
clear.innerHTML = 'Clear Completed';
container.appendChild(clear);
container.appendChild(btn)

btn.addEventListener("click", add)





document.addEventListener("click", event)
