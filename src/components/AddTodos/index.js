import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions";

const AddTodos = ({ dispatch }) => {
  let input;

  return (
    <div className="container-addtodo">
      <form
        className="form-todo"
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input
          placeholder="add todo"
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">+Add Todo</button>
      </form>
      <hr />
    </div>
  );
};

export default connect()(AddTodos);
