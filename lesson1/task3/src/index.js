import React from "react";
import { createRoot } from 'react-dom/client';
import "./styles.css";
// import ReactDom from "react-dom";

const rootElement = document.querySelector('#root');


const element = (
  <div className="greeting">
    <div className="greeting__title">Hello, world!</div>
    <div className="greeting__text">I’m learning React</div>
  </div>

);

const root = createRoot(rootElement);
root.render(element);
// ReactDom.render(element, rootElement);