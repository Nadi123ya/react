import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFilterTextChange = (e) => {
    console.log(e.target.value)
    this.props.onFilterTextChanges(e.target.value);
  }

  handleInStockChange = (e) => {
    console.log(e.target.checked)
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />{" "}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
