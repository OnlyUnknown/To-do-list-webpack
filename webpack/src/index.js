import _ from 'lodash';
import './style.css';
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
    }

]

const flex = document.querySelector(".list")


list.forEach((task) => {
    flex.innerHTML += `<div class="flex-list"><input type="checkbox"> ${task.discription}<div>`
}
)

const clear = document.createElement("div")
clear.classList.add("clear")
clear.innerHTML = "Clear Completed"
flex.appendChild(clear)

