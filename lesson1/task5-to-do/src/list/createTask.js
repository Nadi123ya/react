import { renderTasks } from './render';
import { createTask, getTasksList } from './taskGateway';

export const createNewTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';

  const newTasks = {
    text,
    done: false,
  };

  createTask(newTasks)
    .then(() => getTasksList())
    .then(() => {
      renderTasks();
    });
};

// 1. Prepare the data
// 2. Add data to database
// 3. Read new data from the server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
