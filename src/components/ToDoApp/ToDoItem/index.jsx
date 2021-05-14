import React from "react";
import styles from "./style.module.css";

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      value: props.value,
      completed: props.completed,
    };
  }

  checkCompleted() {
    return this.props.completed === true
      ? `${styles.todoTextCompleted}`
      : "todoText";
  }

  render() {
    return (
      <div id={this.state.id} className={styles.wrapper}>
        <div>
          <span
            className={this.checkCompleted()}
            onClick={() => {
              this.props.handleCompleted(this.props.id);
            }}
          >
            {this.state.value}
          </span>
        </div>
        <button
          className={styles.deleteBtn}
          onClick={() => {
            this.props.removeToDo(this.props.id);
          }}
        >
          DELETE
        </button>
      </div>
    );
  }
}

export default ToDoItem;
