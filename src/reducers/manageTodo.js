import uuid from 'uuid';

export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':
        console.log(action)
        const todo = {  //uuide
          id: uuid(), //uuid
          text: action.payload.text //uuid
        }
        return { todos: state.todos.concat(todo) } //uuid version
      
      // return { todos: state.todos.concat(action.payload.text) };
      

    case "DELETE_TODO":
      console.log(action)
      return {todos: state.todos.filter(todo => todo.id !== action.payload)}
 

    default:
      return state;
  }
}
