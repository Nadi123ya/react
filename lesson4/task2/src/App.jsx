import React from "react";
import Clock from "./Clock.jsx";
import "./index.scss"

const App = () => {
  return (
    <>
      <Clock offset={-5} location="NEW YORK" />
      <Clock offset={2} location="KIEV" />
      <Clock offset={0} location="LONDON" />
    </>
  );
};

export default App;
