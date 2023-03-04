const check = (event) => {
  let book = [];
  if (localStorage.getItem('used') === null) {
    book = [];
  } else {
    book = JSON.parse(localStorage.getItem('used'));
  }
  const list = event.target.nextSibling;
  console.log(event.target);
  const input = event.target;
  if (input.classList.contains('checker')) {
    list.classList.toggle('checked');
  }

  const p = event.target.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML;

  console.log(p);

  for (let i = 0; i < book.length; i++) {
    if (p === String(book[i].index) && book[i].Completed === false) {
      book[i].Completed = true;
    } else if (p === String(book[i].index) && book[i].Completed === true) {
      book[i].Completed = false;
    }
  }
  console.log(book[1].index);

  localStorage.setItem('used', JSON.stringify(book));
};

export default check;