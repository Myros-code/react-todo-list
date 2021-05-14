import React from 'react';
import ToDoTitle from './ToDoTitle/index';
import ToDoInput from './ToDoInput/index';
import ToDoList from './ToDoList/index';
import styles from './style.module.css';

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          completed: false,
          value: 'Зробити задачу',
        },
        {
          id: 2,
          completed: false,
          value: 'Прибрати дім',
        },
        {
          id: 3,
          completed: false,
          value: 'Зайнятись фізкультурою',
        },
      ],
    };
  }

  addToDo = (item) => {
    this.setState({
      todos: [...this.state.todos, item],
    });
  };

  removeToDo = (id) => {
    let newTodos = this.state.todos.filter((el) => {
      return el.id != id;
    });
    this.setState({
      todos: newTodos,
    });
  };

  handleCompleted = (id) => {
    this.setState(
      this.state.todos.map((el) => {
        if (el.id === id) {
          el.completed = !el.completed;
        }
      })
    );
  };

  render() {
    const { todos } = this.state;
    const todosCount = this.state.todos.length;
    return (
      <div className={styles.wrapper}>
        <ToDoTitle todosCount={todosCount} />
        <ToDoInput addToDo={this.addToDo} />
        <ToDoList
          handleCompleted={this.handleCompleted}
          removeToDo={this.removeToDo}
          todos={todos}
        />
      </div>
    );
  }
}

export default ToDoApp;
