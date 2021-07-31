import React, { Component } from 'react';

import Header from '../header';
import Search from '../search';
import ListTodo from '../listTodo';

import './App.css';

export default class App extends Component {
  state = {
    tasks: [
      { id: 0, text: 'Learn React' },
      { id: 1, text: 'Learn Redux' },
      { id: 2, text: 'Learn JSX' },
      { id: 3, text: 'Learn aplication' },
    ],
  };

  onDeleteTask = (id) => {
    this.setState(({ tasks }) => ({ tasks: tasks.filter((t) => t.id !== id) }));
  };

  render() {
    const {
      onDeleteTask,
      state: { tasks },
    } = this;

    return (
      <div className="container">
        <Header />
        <Search />
        <ListTodo tasks={tasks} onDeleteTask={onDeleteTask} />
      </div>
    );
  }
}
