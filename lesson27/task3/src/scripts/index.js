import { createNewTask, checkboxChecked } from './actions.js';
import { renderTasks } from './renderer.js';

const listElem = document.querySelector('.list');
listElem.addEventListener('click', checkboxChecked);

const inputBtnElem = document.querySelector('.create-task-btn');
inputBtnElem.addEventListener('click', createNewTask);

// renderTasks();

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  // initTodoListHandlers();
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
