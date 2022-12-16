import React from "react";

const TodoItems = (props) => {
  const { items, deleteItem } = props;
  let length = items.length;
  const listItems = length ? (
    items.map((item) => (
      <div className="listContainer" key={item.id}>
        <span className="task">{item.task}</span>{" "}
        <span className="num">{item.num}</span>{" "}
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
        <span className="task title">Task</span>
        <span className="num titile">Num</span>
        <span className="action title">Del</span>
      </div>
      {listItems}
    </div>
  );
};

export default TodoItems;
