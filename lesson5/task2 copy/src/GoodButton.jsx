import React from "react";
class GoodButton extends React.Component {
    handleClick(e){
        console.log(e.target.textContent);
        console.log(es);
        alert("Good job!")
    }

  render() {
    return (
      <button className="fancy-button" onClick={this.handleClick} >
        Click me!
      </button>
    );
  }
}

export default GoodButton;
