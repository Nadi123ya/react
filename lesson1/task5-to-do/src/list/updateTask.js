import { renderTasks } from './render';
import { getTasksList, updateTask, deleteTask } from './taskGateway';

export const handleToggleTask = (event) => {
  const isCheckBox = event.target.classList.contains('list-item__checkbox');
  const taskId = event.target.dataset.id;
  if (!isCheckBox) {
    return;
  }
  getTasksList().then((tasksList) => {
    const { text } = tasksList.find(
      (task) => task.id === event.target.dataset.id,
    );

    const done = event.target.checked;

    const updatedTask = {
      text,
      done,
    };

    updateTask(taskId, updatedTask)
      .then(() => getTasksList())
      .then(() => {
        renderTasks();
      });
  });
};

export const onDelete = (event) => {
  const isDeleteButton = event.target.classList.contains(
    'list-item__delete-btn',
  );
  if (!isDeleteButton) {
    return;
  }
  const taskId = event.target.closest('.list-item').dataset.id;
  deleteTask(taskId)
    .then(() => getTasksList())
    .then(() => {
      renderTasks();
    });
};

export const onListClick = (event) => {
  if (event.target.classList.contains('list-item__delete-btn')) {
    onDelete(event);
  }
  if (event.target.classList.contains('list-item__checkbox')) {
    handleToggleTask(event);
  }
};

// 1. Prepare the data
// 2. Update data to database
// 3. Read new data from the server
// 4. Save new data to front-end storage
// 5. Update UI based on new data

// 1. Find id to delete
// 2. Delete data from database
// 3. Read new data from the server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
