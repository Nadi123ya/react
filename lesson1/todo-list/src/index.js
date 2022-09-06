// should render following html

// <h1 class="title">Todo List</h1>

import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";

const rootElement = document.querySelector('#root');


const element = (
<h1 className="title">Todo List</h1>
);

const root = createRoot(rootElement);
root.render(element);
