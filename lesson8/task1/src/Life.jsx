import React from "react";

class Life extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor: good place to create state");
  }
  componentDidMount() {
    console.log("componentDidMount: API calls, subscriptions");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    console.log(
      "shouldComponentUpdate(nextProps, nextState): decide to render or not to render"
    );   
     return nextProps
    // return nextProps.number % 2;
    //odd - 1 - true = will draw
    //even 0 - false = will not draw
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(
      "componentDidUpdate(prevProps, prevState): some updates based on new props"
    );
    return prevProps;
  }

  componentWillUnmount() {
    console.log(
      "componentWillUnmount(): cleanup before DOM related to component will be removed"
    );
  }

  render() {
    console.log("return React element to build DOM");
    return <div className="number">{this.props.number}</div>;
  }
}

export default Life;
