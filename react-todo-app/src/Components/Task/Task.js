import "./Task.css";

import React from "react";

export default class Task extends React.Component {
  constructor(props) {
    super(props);

    this.removeTask = this.removeTask.bind(this);
    this.markDone = this.markDone.bind(this);
  }

  removeTask() {
    this.props.removeTask(this.props.id);
  }

  markDone() {
    if (this.state.backgroundColor === " ") {
      this.setState({ backgroundColor: "rgb(144, 238, 144, 0.5)" });
    } else {
      this.setState({ backgroundColor: " " });
    }
  }

  render() {
    return (
      <div className="task-container">
        <div className="task-container-background" style={{backgroundColor: this.state.backgroundColor}}>
          <div className="task-title">
            <h2 className="task-term">{this.props.text}</h2>
          </div>
          <div className="task-buttons">
            <button className="completed-button" onClick={this.markDone}>
              +
            </button>
            <button className="delete-button" onClick={this.removeTask}>
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}
