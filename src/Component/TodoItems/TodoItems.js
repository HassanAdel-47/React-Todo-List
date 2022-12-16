import React from "react";

const TodoItems = (props) => {
  const { items, deleteItem } = props;
  let length = items.length;
  const listItems = length ? (
    items.map((item) => (
      <div className="listContainer" key={item.id}>
        <span className="name">{item.name}</span>{" "}
        <span className="age">{item.age}</span>{" "}
        <span className="action icon" onClick={() => deleteItem(item.id)}>
          &times;
        </span>
      </div>
    ))
  ) : (
    <p>There Is No Items</p>
  );

  return (
    <div className="listItems">
      <div>
        <h1 className="text-center">React Todo List</h1>
        <span className="name title">Name</span>
        <span className="age titile">Age</span>
        <span className="action title">Del</span>
      </div>
      {listItems}
    </div>
  );
};

export default TodoItems;
