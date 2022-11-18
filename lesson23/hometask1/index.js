//               Render Task
//    1 переменная  с ДОМ Эл. Списка
//    2. Фу-я рендер элементов списка
//      * сортируем входящий масив c {} по параметру done
//      * иттерируемся по вход массиву : создаем ДОМ Эл на каждой  ит-и
//        ** создаем эл. li :  класс - list__item
//        ** создаем эл input :  type- checkbox : класс - list__item-checkbox
//          *** присваиваем атрибутам значения из объекта
//          *** если параметр done === true  - добавляем li : класс - list__item_done
//        ** кладем input => li , возвращаем Дом Эл.
//      *кладем  массив в ДОМ эл в list
//    3. Вызываем фу-я рендер
//
//                Add task
//    1. переменные => ДОМ эл: task-input, create-task-btn
//    2. подписываемся на события 'click' create-task-btn
//    3. фу-я КБ : добавляет новый объект в массив tasks
//      *  очистить инпут => task-input
//      *  очистить list
//      *  рендер массива tasks уже с новым Эл массива
//
//                 Checked
//    1. подписываемся на событие чекбокса
//    2. КБ фу-я изменяет значение Чб на эл.
//      *  взять id эл. на котором произошло событие
//      *  находим по id Эл. в  массиве
//      *  меняем cheked Эл масива на  cheked из события
//      *  очистить list
//      *  рендер массива tasks уже с измененными Эл массива

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
      checkbox.classList.add('list__item-checkbox');
      checkbox.dataset.id = id;
      checkbox.checked = done;

      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const inputTaskElem = document.querySelector('.task-input');
const inputBtnElem = document.querySelector('.create-task-btn'); //

const createNewTask = () => {
  if (inputTaskElem.value !== '') {
    tasks.push({
      text: inputTaskElem.value,
      done: false,
      id: getId(),
    });
  }

  inputTaskElem.value = '';
  listElem.textContent = '';
  renderTasks(tasks);
};

inputBtnElem.addEventListener('click', createNewTask);

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
