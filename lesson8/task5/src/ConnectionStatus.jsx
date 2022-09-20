import React, { Component } from "react";

class ConnectionStatus extends Component {
  state = {
    status: "online",
  };

  componentDidMount() {
    window.addEventListener("online", this.onStatus);
    window.addEventListener("offline", this.onStatus);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.onStatus);
    window.removeEventListener("offline", this.onStatus);
  }

  onStatus = (e) => {
    this.setState({
      status: e.type,
    });
  };

  render() {
    return <div className="status status_offline">{this.state.status}</div>;
  }
}

export default ConnectionStatus;
