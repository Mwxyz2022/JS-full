import { renderTasks } from './renderer.js';
import { storage, getItem, setItem } from './storage.js';

const listElem = document.querySelector('.list');
const getId = () => Math.floor(Math.random() * 1000).toFixed();

export const createNewTask = () => {
  const tasksList = getItem(storage) || [];

  const inputTaskElem = document.querySelector('.task-input');
  if (inputTaskElem.value !== '') {
    tasksList.push({
      text: inputTaskElem.value,
      done: false,
      id: getId(),
    });
  }
  setItem(storage, tasksList);

  inputTaskElem.value = '';
  listElem.textContent = '';
  renderTasks();
};

export const checkboxChecked = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) return;

  const tasksList = getItem(storage) || [];

  const taskId = event.target.dataset.id;
  const tasksElem = tasksList.find(el => el.id === taskId);

  if (event.target.checked) {
    tasksElem.done = true;
  } else {
    tasksElem.done = false;
  }
  setItem(storage, tasksList);

  listElem.textContent = '';
  renderTasks();
};
