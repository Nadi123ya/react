import { createNewTask } from './createTask';
import { onListClick } from './updateTask';

export const initTodoListHandlers = () => {
  const findCreateButton = document.querySelector('.create-task-btn');
  findCreateButton.addEventListener('click', createNewTask);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onListClick);
};
