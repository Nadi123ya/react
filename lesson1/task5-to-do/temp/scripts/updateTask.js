"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onListClick = exports.onDelete = exports.handleToggleTask = void 0;

var _render = require("./render.js");

var _taskGateway = require("./taskGateway.js");

var handleToggleTask = function handleToggleTask(event) {
  var isCheckBox = event.target.classList.contains("list-item__checkbox");
  var taskId = event.target.dataset.id;

  if (!isCheckBox) {
    return;
  }

  (0, _taskGateway.getTasksList)().then(function (tasksList) {
    var _tasksList$find = tasksList.find(function (task) {
      return task.id === event.target.dataset.id;
    }),
        text = _tasksList$find.text;

    var done = event.target.checked;
    var updatedTask = {
      text: text,
      done: done
    };
    (0, _taskGateway.updateTask)(taskId, updatedTask).then(function () {
      return (0, _taskGateway.getTasksList)();
    }).then(function () {
      (0, _render.renderTasks)();
    });
  });
};

exports.handleToggleTask = handleToggleTask;

var onDelete = function onDelete(event) {
  var isDeleteButton = event.target.classList.contains("list-item__delete-btn");

  if (!isDeleteButton) {
    return;
  }

  var taskId = event.target.closest(".list-item").dataset.id;
  (0, _taskGateway.deleteTask)(taskId).then(function () {
    return (0, _taskGateway.getTasksList)();
  }).then(function () {
    (0, _render.renderTasks)();
  });
};

exports.onDelete = onDelete;

var onListClick = function onListClick(event) {
  if (event.target.classList.contains("list-item__delete-btn")) {
    onDelete(event);
  }

  if (event.target.classList.contains("list-item__checkbox")) {
    handleToggleTask(event);
  }
}; // 1. Prepare the data
// 2. Update data to database
// 3. Read new data from the server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
// 1. Find id to delete
// 2. Delete data from database
// 3. Read new data from the server
// 4. Save new data to front-end storage
// 5. Update UI based on new data


exports.onListClick = onListClick;