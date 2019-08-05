// - `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.

import React from 'react';

const List = props => <div>This is the list: {props.propsList} </div>

export default List;
