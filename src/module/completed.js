const check = (event) => {
  let book = [];
  if (localStorage.getItem('used') === null) {
    book = [];
  } else {
    book = JSON.parse(localStorage.getItem('used'));
  }
  const list = event.target.nextSibling;
  const input = event.target;
  if (input.classList.contains('checker')) {
    list.classList.toggle('checked');
  }

  const p = event.target.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML;

  for (let i = 0; i < book.length; i += 1) {
    if (p === String(book[i].index) && book[i].Completed === false) {
      book[i].Completed = true;
    } else if (p === String(book[i].index) && book[i].Completed === true) {
      book[i].Completed = false;
    }
  }

  localStorage.setItem('used', JSON.stringify(book));
};

export default check;