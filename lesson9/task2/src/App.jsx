import React from "react";
import UserForm from './UserForm';

class App extends React.Component {
  createUser = (user) => {
    console.log(user);
  };
  render(){
    return (
        <UserForm onSubmit={this.createUser}/>
    )
  }
}

export default App;
