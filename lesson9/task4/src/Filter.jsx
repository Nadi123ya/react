import React from "react";

class Filter extends React.Component {
  render() {
    return (
      <>
        <span className="filter__count">{this.props.count}</span>
        <input
          type="text"
          onChange={this.props.onChange}
          className="filter__input"
          value={this.props.filterText}
        />
      </>
    );
  }
}

export default Filter;
