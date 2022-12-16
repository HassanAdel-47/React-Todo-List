import React, { Component } from "react";
var myId = Math.random();

export default class AddItems extends Component {
  state = {
    id: myId,
    task: "",
    num: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.num && this.state.task
      ? this.props.addItem(this.state)
      : console.log("Enter Values");
    this.setState({ id: myId });
    this.setState({ task: "" });
    this.setState({ num: "" });
  };
  render() {
    myId = Math.random();
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter task..."
            id="task"
            onChange={this.handleChange}
            value={this.state.task}
          />
          <input
            type="number"
            placeholder="Enter num..."
            id="num"
            onChange={this.handleChange}
            value={this.state.num}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
