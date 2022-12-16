import "./App.css";
import "animate.css";
import React, { Component } from "react";
import TodoItems from "./Component/TodoItems/TodoItems";
import AddItems from "./Component/AddItem/AddItems";

class App extends Component {
  state = {
    items: [],
  };
  deleteItem = (id) => {
    let myItems = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items: myItems });
  };
  addItem = (item) => {
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };
  render() {
    return (
      <div className="App container">
        <div className="photo animate__animated animate__fadeInLeft"></div>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItems addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
