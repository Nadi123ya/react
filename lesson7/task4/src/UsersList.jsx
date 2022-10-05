import React from "react";
import User from "./User";
import Pagination from "./Pagination";

import React from "react";

class UsersList extends React.Component {
  render() {
    return (
      <ul class="users">
        <User />
        <Pagination />
      </ul>
    );
  }
}

export default UsersList;
