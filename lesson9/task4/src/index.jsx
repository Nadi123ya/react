import React from "react";
import ReactDOM from "react-dom";
import UsersList from "./UsersList";
import "./index.scss";


const rootElem = document.querySelector("#root");

const users = [
    {
      id: 'id-0',
      age: 48,
      name: 'Nadiia',
    },
    {
      id: 'id-1',
      age: 19,
      name: 'Carry',
    },
    {
      id: 'id-2',
      age: 23,
      name: 'Bob',
    },
    {
      id: 'id-3',
      age: 9,
      name: 'Kate',
    },
  ];

ReactDOM.render(<UsersList users={users}/>, rootElem)
