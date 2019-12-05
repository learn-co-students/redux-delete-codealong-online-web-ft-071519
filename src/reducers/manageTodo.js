import uuid from 'uuid';

export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TODO':
      // When adding todo, creates a todo object with an unique ID using uuid function imported in.
      const todo = {
        id: uuid(),
        text: action.payload.text
      }
      return { todos: state.todos.concat(todo) };

    case 'DELETE_TODO':
      // Using .filter, this returns all the todos that do not match our todo.
      return { todos: state.todos.filter(todo => todo.id !== action.payload) }
    default:
      return state;
  }
}