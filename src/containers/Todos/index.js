import { connect } from "react-redux";
import { toggleTodo } from "../../actions";
import Todos from "../../components/Todos/index.js";

const getTodos = (todos, filter) => {
  switch (filter) {
    case "ALL":
      return todos;
    case "ACTIVE":
      return todos.filter((todo) => !todo.completed);
    case "COMPLETED":
      return todos.filter((todo) => todo.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

function mapStateToProps(state) {
  return {
    todos: getTodos(state.todos, state.filter),
  };
}

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
