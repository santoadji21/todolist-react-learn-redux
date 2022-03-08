import React from "react";
import { Todo } from "../Todo/index.js";


function Todos({ todos, toggleTodo }) {
  return (
    <div className="list-todo">
      <ul>
        {todos.map((todo) => {
          console.log(todo);
          return (
            <Todo
              key={todo.id}
              {...todo}
              onClick={() => toggleTodo(todo.id)}
            ></Todo>
          );
        })}
      </ul>
    </div>
  );
}

export default Todos;