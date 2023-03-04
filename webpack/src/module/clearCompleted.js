
const clearC = () =>{

    let book = [];
    if (localStorage.getItem('used') === null) {
      book = [];
    } else {
      book = JSON.parse(localStorage.getItem('used'));
    }

book = book.filter(checkAdult);

function checkAdult(age) {
 
  return age.Completed === false;
  
}

for(let i = 0; i < book.length; i++){
    book[i].index = i + 1
}




console.log(book)



console.log(book)
localStorage.setItem('used', JSON.stringify(book));

const flex = document.querySelector('.list');
flex.innerHTML =   `<div class="today">Today's To Do</div>
<input class="value" type="text" placeholder="Add to the list">`
for (let i = 0; i < book.length; i += 1) {
  flex.innerHTML += `<div class="flex-list"><input class="checker" type="checkbox"><div class="value-list"> ${book[i].discription} </div> <a class="right" href="#"><i class="fa-sharp fa-solid fa-ellipsis-vertical"></i></a><p class="index">${i + 1}</p></div>`;
}

console.log(book)
}

export default clearC
