import React from "react";
import Clock from "./Clock.jsx";
import "./index.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <div>
        <button className="btn" onClick={this.toggle}>
          Toggle
        </button>
        <div className="clock">
          <div>
            {this.state.visible && <Clock location={"London"} offset={0} />}
          </div>
          <div>
            {this.state.visible && <Clock location={"Kiev"} offset={2} />}
          </div>
          <div>
            {this.state.visible && <Clock location={"New York"} offset={-5} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
