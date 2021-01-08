import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="todo-item-container">
        {this.props.todo.task}
        <div className="btn-container-todo">
          <button className="todo-btn">✏️</button>
          <button className="todo-btn">❌</button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
