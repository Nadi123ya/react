import React, { useState, useEffect } from "react";

const ConnectionStatus = () => {
  const [currentStatus, setStatus] = useState({
    status: "online",
  });

  useEffect(() => {
    const onStatus = (e) => {
       setStatus({ status: e.type });
    };

    window.addEventListener("online", onStatus);
    window.addEventListener("offline", onStatus);

    return () => {
      window.removeEventListener("online", onStatus);
      window.removeEventListener("offline", onStatus);
    };
  }, []);

  const { status } = currentStatus;
    return <div className="status status_offline">{status}</div>;
};
// class ConnectionStatus extends Component {
//   state = {
//     status: "online",
//   };

//   componentDidMount() {
//     window.addEventListener("online", this.onStatus);
//     window.addEventListener("offline", this.onStatus);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("online", this.onStatus);
//     window.removeEventListener("offline", this.onStatus);
//   }

//   onStatus = (e) => {
//     this.setState({
//       status: e.type,
//     });
//   };

//   render() {
//     return <div className="status status_offline">{this.state.status}</div>;
//   }
// }

export default ConnectionStatus;
