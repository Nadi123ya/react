import React from "react";
import PropTypes from "prop-types";

class CreateTaskInput extends React.PureComponent {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleTaskCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({value: ""});
  };

  render() {
    return (
      <div className="create-task">
        <input
          type="text"
          value={this.state.value}
          className="create-task__input"
          onChange={this.handleChange}
        />
        <button
          className="btn create-task__btn"
          onClick={this.handleTaskCreate}
        >
          Create
        </button>
      </div>
    );
  }
}
CreateTaskInput.propTypes = {
  value: PropTypes.string,
};

CreateTaskInput.defaultProps = {
  value: "plant a tree",
};

export default CreateTaskInput;

//1. Take a text from the input//
// in order to do it we need to make an input a controlled component,
// so we need to add state
//2. Create a task with this text
//3. Add created task to the list
