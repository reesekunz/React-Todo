// - `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
// - All of your application data will be stored here on `<App />`.
// - All of your `handler` functions should live here on `<App />`.

import React from "react";
import TodoList from "./components/TodoComponents/TodoList";

const toDoData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: toDoData
    };
  }
  // new class property - don't need a const = in classes
  toggleItem = id => {
    console.log("toggle item is working!", id);
    // update our state (toDo) on toggle 
    // use this.setState
    // loop through the toDoData array
    // find which element we clicked on and update the 'purchased' property for that element/item 
    this.setState[{
      // pass through the state objects you are trying to update 
      // whenever you update an array or object, rebuild that object from scratch (immutability)

      toDo: this.state.toDo.map(item => {
        // means you found the item that you clicked on
        if (item.id === id) {
          return {
            ... item 
          // ... item is the spread operator = is same as
          // task: item.task,
          // id: item.id,
          // completed: item.completed 
          // want to keep the same task and id but update when that task is complete (flip the T/F boolean)
          // make sure its after spread operator is it overrides completed value
            completed: !item.completed
          };
        } 
        // if it doesn't match, just return item untouched
        else {
          return item;
        }
      })
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h2>To-do List:</h2>
          {/* // access class property with 'this' keyword */}
          <TodoList toDo={this.state.toDo} toggleItem={this.toggleItem} />
        </div>
      </div>
    );
  }
}

export default App;
