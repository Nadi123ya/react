import React from "react";
import "./styles.scss";

class Search extends React.Component {
  state = { value: "" };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  search = (e) => {
    e.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };

  render() {
    return (
      <form className="search" onSubmit={this.search}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
          className="search__input"
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
