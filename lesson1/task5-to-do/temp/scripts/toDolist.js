"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initTodoListHandlers = void 0;

var _createTask = require("../scripts/createTask.js");

var _updateTask = require("../scripts/updateTask.js");

var initTodoListHandlers = function initTodoListHandlers() {
  var findCreateButton = document.querySelector(".create-task-btn");
  findCreateButton.addEventListener("click", _createTask.createNewTask);
  var listElem = document.querySelector(".list");
  listElem.addEventListener("click", _updateTask.onListClick);
};

exports.initTodoListHandlers = initTodoListHandlers;