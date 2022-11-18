const getId = () => Math.floor(Math.random() * 1000).toFixed();

const tasks = [
  { text: 'Buy milk', done: false, id: getId() },
  { text: 'Pick up Tom from airport', done: false, id: getId() },
  { text: 'Visit party', done: false, id: getId() },
  { text: 'Visit doctor', done: true, id: getId() },
  { text: 'Buy meat', done: true, id: getId() },
];

//                Render Task
//
const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.dataset.id = id;
      checkbox.checked = done;

      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

//                Add task
//
const inputTaskElem = document.querySelector('.task-input');
const inputBtnElem = document.querySelector('.create-task-btn');

const createNewTask = () => {
  if (inputTaskElem.value !== '') {
    tasks.push({
      text: inputTaskElem.value,
      done: false,
      id: getId(),
    });
  }
  listElem.textContent = '';
  inputTaskElem.value = '';
  renderTasks(tasks);
};

inputBtnElem.addEventListener('click', createNewTask);

//                Checked
//
const checkboxChecked = event => {
  const taskId = event.target.dataset.id;
  const tasksElem = tasks.find(el => el.id === taskId);

  if (event.target.checked) {
    tasksElem.done = true;
  } else {
    tasksElem.done = false;
  }
  listElem.textContent = '';
  renderTasks(tasks);
};

listElem.addEventListener('click', checkboxChecked);
