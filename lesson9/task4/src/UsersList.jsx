import React from "react";
import Filter from "./Filter";
import User from "./User";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    filter: "",
    usersList: this.props.users,
  };

  handleChange = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    console.log(this.props.users);
    let sortedUsers;
    if (this.state.filter.toUpperCase() !== this.state.filter.toLowerCase()) {
      sortedUsers = this.state.usersList
        .slice()
        .filter((user) =>
          user.name
            .toLowerCase()
            .split("")
            .includes(this.state.filter.toLowerCase().split("").toString())
        );
    } else {
      sortedUsers = this.state.usersList;
    }

    return (
      <div>
        <div className="filter">
          <Filter
            filterText={this.state.filter}
            count={sortedUsers.length}
            onChange={this.handleChange}
          />
        </div>
        <ul className="users">
          {sortedUsers.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
