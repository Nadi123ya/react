import React from "react";

class Expand extends React.Component {
    state = {
      isOpen: true,
    };

  handleExpand = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    let arrow;
    let children;
    if (this.state.isOpen) {
      children = null;
      arrow = <i className="fa-solid fa-arrow-down"></i>
    } else {
      children = this.props.children;
     arrow =  <i className="fa-solid fa-arrow-up"></i>

    }
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick = {this.handleExpand}>
           {arrow}
          </button>
        </div>
        <div className="expand__content">
          {children}
        </div>
      </div>
    );
  }
}
export default Expand;
