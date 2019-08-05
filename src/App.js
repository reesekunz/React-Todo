// - `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
// - All of your application data will be stored here on `<App />`.
// - All of your `handler` functions should live here on `<App />`.

import React from 'react';
import List from './components/TodoComponents/TodoList'

const toDo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  constructor() {
  super();
  this.state = {
  list: "hello from state"

  }

  }
  render() {
    return (
      <div className="App">
        <div className="Header">
        <h2>To-do List:
        </h2>
        <List propsList= {this.state.list} />
      </div>
      </div>


    );
  }
}

export default App;
