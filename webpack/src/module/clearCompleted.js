const clearC = () => {
  let task = [];
  if (localStorage.getItem('used') === null) {
    task = [];
  } else {
    task = JSON.parse(localStorage.getItem('used'));
  }

  const clearlist = (taskc) => taskc.Completed === false;

  task = task.filter(clearlist);

  for (let i = 0; i < task.length; i += 1) {
    task[i].index = i + 1;
  }

  localStorage.setItem('used', JSON.stringify(task));

  const flex = document.querySelector('.list');
  flex.innerHTML = `<div class="today">Today's To Do</div>
<input class="value" type="text" placeholder="Add to the list">`;
  for (let i = 0; i < task.length; i += 1) {
    flex.innerHTML += `<div class="flex-list"><input class="checker" type="checkbox"><div class="value-list"> ${task[i].discription} </div> <a class="right" href="#"><i class="fa-sharp fa-solid fa-ellipsis-vertical"></i></a><p class="index">${i + 1}</p></div>`;
  }
};

export default clearC;
