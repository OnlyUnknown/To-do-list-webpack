const remove = (event) => {
  let task = [];
  if (localStorage.getItem('used') === null) {
    task = [];
  } else {
    task = JSON.parse(localStorage.getItem('used'));
  }

  if (event.target.classList.contains('fa-trash')) {
    event.target.parentElement.parentElement.remove();
    for (let i = 0; i < task.length; i += 1) {
      if (event.target.parentElement.nextSibling.innerHTML === String(task[i].index)) {
        task.splice(i, 1);
      }
      if (i < task.length) {
        task[i].index = i + 1;
      }
    }

    for (let i = 0; i < task.length; i += 1) {
      const inde = document.querySelectorAll('.index');
      inde[i].innerHTML = i + 1;
    }
  }
  localStorage.setItem('used', JSON.stringify(task));
};

export default remove;
