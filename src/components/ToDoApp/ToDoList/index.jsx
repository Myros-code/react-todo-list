import React from "react";
import styles from "./style.module.css";
import ToDoItem from "../ToDoItem/index";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }

  checkCompleted() {}

  getItems() {
    const items = this.props.todos.map((item) => {
      return (
        <li key={item.id} className={styles.item}>
          <ToDoItem
            id={item.id}
            completed={item.completed}
            value={item.value}
            removeToDo={this.props.removeToDo}
            handleCompleted={this.props.handleCompleted}
          />
        </li>
      );
    });
    return items;
  }

  render() {
    return <ul className={styles.list}>{this.getItems()}</ul>;
  }
}

export default ToDoList;
