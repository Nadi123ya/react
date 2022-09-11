import React from "react";
import Greeting from "./Greeting";

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    // let button = this.state.isLoggedIn
    // ? <button onClick={this.handleLogout}>Logout</button>
    // : <button onClick={this.handleLogin}>Login</button>;
    // if (this.state.isLoggedIn) {
    //   button = <button onClick={this.handleLogout}>Logout</button>;
    // } else {
    //   button = <button onClick={this.handleLogin}>Login</button>;
    // }
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
          {this.state.isLoggedIn ? (
            <button onClick={this.handleLogout}>Logout</button>
          ) : (
            <button onClick={this.handleLogin}>Login</button>
          )}
      </div>
    );
  }
}

export default Auth;
