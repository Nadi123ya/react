import React, { PureComponent } from "react";

class Home extends PureComponent {
  render() {
    return ();
  }
}

Numbers.PropTypes = {
  title: PropTypes.string,
  number: PropTypes.number.isRequired,
};

Numbers.defaultProps = {
  title: "Some number",
};

export default Home;
