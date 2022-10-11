import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import "./index.scss"

const rootElem = document.querySelector("#root");

ReactDOM.render(<Counter />, rootElem);