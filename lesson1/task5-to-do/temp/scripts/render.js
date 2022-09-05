"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTasks = void 0;

var _taskGateway = require("./taskGateway.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var listElem = document.querySelector(".list");

var compareTasks = function compareTasks(a, b) {
  return a.done - b.done;
};

var createListItem = function createListItem(_ref) {
  var text = _ref.text,
      done = _ref.done,
      id = _ref.id;
  var listItemElem = document.createElement("li");
  listItemElem.classList.add("list-item");
  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.dataset.id = Number(id);
  checkbox.checked = done;
  checkbox.classList.add("list-item__checkbox");

  if (done) {
    listItemElem.classList.add("list-item_done");
  }

  var createText = document.createElement("span");
  createText.classList.add("list-item__text");
  createText.textContent = text;
  var deleteBtn = document.createElement("button");
  deleteBtn.classList.add("list-item__delete-btn");
  listItemElem.append(checkbox, createText, deleteBtn);
  listItemElem.dataset.id = Number(id);
  return listItemElem;
};

var renderTasks = function renderTasks() {
  (0, _taskGateway.getTasksList)().then(function (tasksList) {
    listElem.innerHTML = "";
    var tasksElems = tasksList.slice().sort(compareTasks).map(createListItem);
    listElem.append.apply(listElem, _toConsumableArray(tasksElems));
  });
};

exports.renderTasks = renderTasks;
renderTasks(); // const tasksList = (listElem.innerHTML = "");
// const tasksElems = tasksList.slice().sort(compareTasks).map(createListItem);
// listElem.append(...tasksElems);
// 1. Prepare the data
// 2. Add data to database
// 3. Read new data from the server
// 4. Save new data to front-end storage
// 5. Update UI based on new data