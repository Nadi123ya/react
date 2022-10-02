import React from "react";
import Dialog from "./Dialog";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    return (
      <div className="app">
        <button className="btn" onClick={this.showDialog}>
          Show
        </button>
        <Dialog
          isOpen={this.state.isOpen}
          onClose={this.hideDialog}
          title="some title"
        >
          Some text
        </Dialog>
      </div>
    );
  }
}
Dialog.PropTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

Dialog.defaulProps = {
  isOpen: false,
  title: "",
};

export default App;
