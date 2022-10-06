const baseUrl =
  "https://crudcrud.com/api/729662a292ce47e4bea5dab0dc82ecd7/tasks";

// const baseUrl = "https://62f9bd43ffd7197707df7c8f.mockapi.io/tasks";

export const fetchTasksList = () => {
  return fetch(baseUrl)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((tasksList) =>
      tasksList.map(({ _id, ...task }) => ({
        id: _id,
        ...task,
      }))
    );
};

export const createTask = (taskData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;utc-8",
    },
    body: JSON.stringify(taskData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create a task");
    }
  });
};

export const updateTask = (taskId, updatedTask) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;utc-8",
    },
    body: JSON.stringify(updatedTask),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to update a task");
    }
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to delete a task");
    }
  });
};
