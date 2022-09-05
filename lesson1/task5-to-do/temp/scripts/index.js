"use strict";

var _toDolist = require("../scripts/toDolist.js");

var _render = require("../scripts/render.js");

var _taskGateway = require("./taskGateway.js");

document.addEventListener("DOMContentLoaded", function () {
  (0, _taskGateway.getTasksList)().then(function () {
    (0, _render.renderTasks)();
  });
  (0, _toDolist.initTodoListHandlers)();
}); // 1.Get data from server
// 2. Save data to front-end storage