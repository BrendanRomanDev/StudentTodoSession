import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 0, task: "walk the dog" },
        { id: 1, task: "another" },
        { id: 2, task: "third task" },
        { id: 33, task: "4 task" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="todo-header">
            <h2>Todos!</h2>
          </div>
          <div className="todo-body">
            {this.state.todos.map(item => (
              <TodoItem todo={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
