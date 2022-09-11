import React from "react";

export class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      toggler: "Off",
    };
  }

  switch = () => {
    this.setState({
      counter:
        this.state.counter === false
          ? (this.state.counter = true)
          : (this.state.counter = false),
    });
    this.setState({
      toggler:
        this.state.counter === false
          ? (this.state.toggler = "On")
          : (this.state.toggler = "Off"),
    });
  };

  render() {
    return (
      <button className="toggler" onClick={this.switch}>
        {this.state.toggler}
      </button>
    );
  }
}

export default Toggler;
