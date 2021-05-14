import React from "react";

class ToDoInput extends React.Component {
  constructor(props) {
    super(props);
    this.addToDo = this.props.addToDo;
    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit() {
    let item = {
      id: new Date().getTime(),
      value: this.state.value,
      completed: false,
    };
    if (this.state.value !== "") {
      this.addToDo(item);
      this.setState({
        value: "",
      });
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="New task"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>+ADD</button>
      </div>
    );
  }
}

export default ToDoInput;
