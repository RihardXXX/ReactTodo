import React, { Component } from 'react';

import './Form.css';

export default class Form extends Component {
  state = {
    text: '',
    clear: false,
  };

  onChangeText = (e) => {
    if (e.target.value.length > 20) return;
    this.setState(({ text }) => ({ text: e.target.value }));
  };

  addTask = (e) => {
    e.preventDefault();
    const { onAddTask } = this.props;
    const { text } = this.state;
    if (!text) {
      this.setState(({ clear }) => ({ clear: true }));
      return;
    }
    onAddTask(text);
    this.setState(({ text, clear }) => ({ text: '', clear: false }));
  };

  render() {
    const { addTask, onChangeText } = this;
    const { clear } = this.state;

    const warning = clear ? 'please input text' : '';

    return (
      <form className="form" onSubmit={addTask}>
        <label>Tasks text</label>
        <div className="form-wrapper">
          <input
            type="text"
            className="form-control"
            placeholder="Enter task"
            onChange={onChangeText}
            value={this.state.text}
          />
          <span>{warning}</span>
          <button type="submit" className="btn btn-primary">
            add task
          </button>
        </div>
      </form>
    );
  }
}
