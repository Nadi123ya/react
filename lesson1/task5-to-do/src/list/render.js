import { getTasksList } from './taskGateway';
import '../styles.scss';

const listElem = document.querySelector('.list');

const compareTasks = (a, b) => a.done - b.done;

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list-item');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.dataset.id = Number(id);
  checkbox.checked = done;
  checkbox.classList.add('list-item__checkbox');
  if (done) {
    listItemElem.classList.add('list-item_done');
  }

  const createText = document.createElement('span');
  createText.classList.add('list-item__text');
  createText.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('list-item__delete-btn');

  listItemElem.append(checkbox, createText, deleteBtn);
  listItemElem.dataset.id = Number(id);
  return listItemElem;
};

export const renderTasks = () => {
  getTasksList().then((tasksList) => {
    listElem.innerHTML = '';
    const tasksElems = tasksList.slice().sort(compareTasks).map(createListItem);
    listElem.append(...tasksElems);
  });
};
renderTasks();

// const tasksList = (listElem.innerHTML = "");
// const tasksElems = tasksList.slice().sort(compareTasks).map(createListItem);
// listElem.append(...tasksElems);

// 1. Prepare the data
// 2. Add data to database
// 3. Read new data from the server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
