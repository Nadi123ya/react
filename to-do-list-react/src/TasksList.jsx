import React from "react";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";
import {
  createTask,
  fetchTasksList,
  updateTask,
  deleteTask,
} from "./tasksGateway";

import propTypes from "prop-types";

class TasksList extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then((tasksList) =>
      this.setState({
        tasks: tasksList,
      })
    );
  };

  onCreate = (text) => {
    const newTask = {
      text,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTasks());
  };

  handleTaskStatusChange = (id) => {
    const { done, text } = this.state.tasks.find((task) => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };
    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  //     return {
  //       ...task,
  //       done: !task.done,
  //     };
  //   }
  //   return task;
  // });
  // this.setState({
  //   tasks: updatedTasks,
  // });

  // 1. find a task in the list
  // 2. toggle done value
  // 3. save updated list

  handleTaskDelete = (id) => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  //1.filter tasks
  //2.Update state
  // const updatedTasks = this.state.tasks
  //   .slice()
  //   .filter((task) => task.id !== id);
  // this.setState({ tasks: updatedTasks });

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map((task) => (
            <Task
              {...task}
              key={task.id}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Task.propTypes = {
  done: propTypes.bool,
  id: propTypes.string,
  onChange: propTypes.func,
  onDelete: propTypes.func,
  text: propTypes.string,
};

export default TasksList;
