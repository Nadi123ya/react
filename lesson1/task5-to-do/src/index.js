import { initTodoListHandlers } from './list/toDolist';
import { renderTasks } from './list/render';
import { getTasksList } from './list/taskGateway';
import './styles.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then(() => {
    renderTasks();
  });
  initTodoListHandlers();
});

// 1.Get data from server
// 2. Save data to front-end storage
