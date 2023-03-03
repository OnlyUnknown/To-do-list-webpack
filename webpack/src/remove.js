const remove = (event) => {
  let book = [];
  if (localStorage.getItem('used') === null) {
    book = [];
  } else {
    book = JSON.parse(localStorage.getItem('used'));
  }

  if (event.target.classList.contains('fa-trash')) {
    event.target.parentElement.parentElement.remove();
    for (let i = 0; i < book.length; i += 1) {
      if (event.target.parentElement.nextSibling.innerHTML === String(book[i].index)) {
        book.splice(i, 1);
      }
      if (i < book.length) {
        book[i].index = i + 1;
      }
    }

    for (let i = 0; i < book.length; i += 1) {
      const inde = document.querySelectorAll('.index');
      inde[i].innerHTML = i + 1;
    }
  }
  localStorage.setItem('used', JSON.stringify(book));
};

export default remove;
