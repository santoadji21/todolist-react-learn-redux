let nextTodoId = 3;

export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id : id
});


export const setFilter = (filter) => ({
  type: "SET_FILTER",
  filter,
});