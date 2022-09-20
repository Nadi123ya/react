import React from "react";

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: getTimeWithOffset(props.offset),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        date: getTimeWithOffset(this.props.offset),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock__container">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">
          {this.state.date.toLocaleTimeString()}
        </div>
      </div>
    );
  }
}

export default Clock;
