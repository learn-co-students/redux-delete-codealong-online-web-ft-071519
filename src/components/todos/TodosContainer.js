import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map(todo => <Todo deleteTodo={this.props.deleteTodo} key={todo.id} todo={todo} />)

  render() {
    console.log(this.props)
    return(
      <div>{this.renderTodos()}</div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    deleteTodo: todoID => dispatch({type: "DELETE_TODO", payload: todoID})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
