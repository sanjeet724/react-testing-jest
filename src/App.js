import React, { Component } from 'react';
import './App.css';
import TaskItems from './components/taskItems'
import DoneItems from './components/doneItems'
import './components/listStyles.css'
const State = require('./State');

class App extends Component {
  state = State.getInitialState();

  addTask = () => {
    if (this.state.toAdd.text) {
      // add to the list
      const tasks = [...this.state.tasks];
      const newTask = {
        id: tasks.length + 1,
        text: this.state.toAdd.text,
        status: "NOK"
      }
      tasks.push(newTask);
      this.setState({ tasks });

      // clear the input
      const toAdd = { ...this.state.toAdd };
      toAdd.text = "";
      this.setState({ toAdd });
    }
  };

  handleChange = (e) => {
    if (e.target.value) {
      const toAdd = { ...this.state.toAdd };
      toAdd.text = e.target.value;
      this.setState({ toAdd });
    }
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const toAdd = { ...this.state.toAdd };
      toAdd.text = e.target.value;
      this.setState({ toAdd });
      this.addTask();
    }
  };

  handleTaskStatusChange = (task) => {
    const tasks = [...this.state.tasks];
    const index = tasks.indexOf(task);
    tasks[index].status = "OK";

    this.setState({ tasks });
  };

  render() {
    return (
      <div className="App container">
        <h1 className="App-header">My To-Do App</h1>
        <div className="input-group">
          <div className="input-group-prepend">
            <button onClick={this.addTask} className="btn btn-primary m-2">Add Something</button>
          </div>
          <input type="text" className="form-control m-2" maxLength="30"
            placeholder={this.state.toAdd.placeholder}
            value={this.state.toAdd.text}
            onChange={(event) => this.handleChange(event)}
            onKeyPress={(event) => this.handleKeyPress(event)} />
        </div>
        <div className="task-container-todo">
          <TaskItems
            tasks={this.state.tasks.filter(task => task.status === "NOK")}
            onTaskCompleted={this.handleTaskStatusChange} />
        </div>
        <div className="task-container-done">
          <DoneItems tasks={this.state.tasks.filter(task => task.status === "OK")} />
        </div>
      </div>
    );
  }
}

export default App;
