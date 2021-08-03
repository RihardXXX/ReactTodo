import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from '../header';
import Search from '../search';
import ListTodo from '../listTodo';
import Form from '../form';

import './App.css';

export default class App extends Component {
  createTask = (text) => ({
    id: uuidv4(),
    text: text,
    done: false,
    important: false,
  });

  state = {
    tasks: [
      this.createTask('Learn React'),
      this.createTask('Learn Redux'),
      this.createTask('Learn JSX'),
      this.createTask('Learn aplication'),
    ],
    query: '',
    arg: '',
  };

  setQuery = (queryText) => {
    this.setState(({ query }) => ({ query: queryText }));
  };

  setArg = (newArg) => {
    this.setState(({ arg }) => ({ arg: newArg }));
  };

  onDeleteTask = (id) => {
    this.setState(({ tasks }) => ({ tasks: tasks.filter((t) => t.id !== id) }));
  };

  onAddTask = (text) =>
    this.setState(({ tasks, result }) => ({
      tasks: [...this.state.tasks, this.createTask(text)],
    }));

  changeProperty = (arr, property, id) => {
    return arr.map((task) => {
      if (task.id === id) {
        return { ...task, [property]: !task[property] };
      }
      return task;
    });
  };

  onDone = (id) =>
    this.setState(({ tasks }) => ({
      tasks: this.changeProperty([...tasks], 'done', id),
    }));

  onImportant = (id) =>
    this.setState(({ tasks }) => ({
      tasks: this.changeProperty([...tasks], 'important', id),
    }));

  searchTask = (query, arr) => {
    if (!query) {
      return arr;
    } else {
      return arr
        .map((task) => ({
          ...task,
          text: task.text.toLowerCase(),
        }))
        .filter((task) => {
          return task.text.indexOf(query) >= 0;
        });
    }
  };

  sortedTasks = (arr) => {
    const { arg } = this.state;
    if (!arg || arg === 'all') return arr;
    return arg === 'done'
      ? arr.filter((task) => task[arg])
      : arr.filter((task) => !task['done']);
  };

  render() {
    const {
      onDeleteTask,
      onAddTask,
      onDone,
      onImportant,
      searchTask,
      setQuery,
      sortedTasks,
      setArg,
      state: { tasks, query, arg },
    } = this;

    const doneCount = tasks.filter((tasks) => tasks.done).length;
    const todoCount = tasks.length - doneCount;

    const visibleData = sortedTasks(searchTask(query, tasks));

    return (
      <div className="container">
        <Header todoCount={todoCount} doneCount={doneCount} />
        <Search setQuery={setQuery} setArg={setArg} arg={arg} />
        <ListTodo
          tasks={visibleData}
          onDeleteTask={onDeleteTask}
          onDone={onDone}
          onImportant={onImportant}
        />
        <Form onAddTask={onAddTask} />
      </div>
    );
  }
}
