"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewTask = void 0;

var _render = require("../scripts/render.js");

var _taskGateway = require("./taskGateway.js");

var createNewTask = function createNewTask() {
  var taskTitleInputElem = document.querySelector(".task-input");
  var text = taskTitleInputElem.value;

  if (!text) {
    return;
  }

  taskTitleInputElem.value = "";
  var newTasks = {
    text: text,
    done: false
  };
  (0, _taskGateway.createTask)(newTasks).then(function () {
    return (0, _taskGateway.getTasksList)();
  }).then(function () {
    (0, _render.renderTasks)();
  });
}; // 1. Prepare the data
// 2. Add data to database
// 3. Read new data from the server
// 4. Save new data to front-end storage
// 5. Update UI based on new data


exports.createNewTask = createNewTask;