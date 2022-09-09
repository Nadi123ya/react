import React from "react";

const getAge = (date) =>
  new Date().getFullYear() - new Date(date).getFullYear();

function Greeting(props) {
  return (
    <div className="greeting">{`My  is ${props.firstName} ${
      props.lastName
    }. I'm ${getAge(props.birthDate)} years old`}</div>
  );
}

export default Greeting;
