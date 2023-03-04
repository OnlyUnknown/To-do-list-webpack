const list = document.querySelector('.list');

const add = () => {
  let task = [];
  if (localStorage.getItem('used') === null) {
    task = [];
  } else {
    task = JSON.parse(localStorage.getItem('used'));
  }

  const { value } = document.querySelector('.value');
  const newDiv = document.createElement('div');
  newDiv.classList.add('flex-list');
  newDiv.innerHTML = `<input type="checkbox"><div class ="value-list"> ${value} </div> <a class="right" href="#"><i class="fa-sharp fa-solid fa-ellipsis-vertical"></i></a><p class="index">${task.length + 1}</p>`;
  if (value !== '') {
    list.appendChild(newDiv);

    task.push({ index: task.length + 1, discription: value, Completed: false });

    localStorage.setItem('used', JSON.stringify(task));
  }
};

export default add;