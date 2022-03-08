import React from "react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";

export const Todo = ({ onClick, completed, text }) => (
  <div className="todo" onClick={onClick}>
    <i>
      {completed ? <RiCheckboxCircleFill /> : <RiCheckboxBlankCircleLine />}
    </i>
    <li
      style={{
        textDecoration: completed ? "line-through" : "none",
        cursor: completed ? "default" : "pointer",
      }}
    >
      {text}
    </li>
  </div>
);
