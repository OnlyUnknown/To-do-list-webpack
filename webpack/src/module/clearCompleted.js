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

for(let i = 0; i < book.length; i += 1){
    book[i].index = i + 1;
    const inde = document.querySelectorAll('.index');
      inde[i].innerHTML = i + 1;
      console.log(inde[i])
}

localStorage.setItem('used', JSON.stringify(book));
}

export default clearC
