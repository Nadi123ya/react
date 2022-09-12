import React from "react";
import Status from "./Status";

class Main extends React.Component {
  state = {
    isOnline: true,
  };

  render() {
    return (
      <div className="status">
        <Status />
      </div>
    );
  }
}

export default Main;
