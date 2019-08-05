// - `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.

import React from "react";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.toDo.map(item => (
        <Item key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearList}>
        Clear List
      </button>
    </div>
  );
};

export default TodoList;
