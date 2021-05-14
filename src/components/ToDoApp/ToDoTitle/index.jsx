import React from "react";
import styles from "./style.module.css";

class ToDoTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1 className={styles.title}>
        Tasks
        <span className={styles.taskCount}>({this.props.todosCount})</span>
      </h1>
    );
  }
}

export default ToDoTitle;
