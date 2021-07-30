import React from 'react';

import Header from '../header';
import Search from '../search';
import ListTodo from '../listTodo';

import './App.css';

const tasks = [
  { id: 0, text: 'Learn React', important: false },
  { id: 1, text: 'Learn Redux', important: true },
  { id: 2, text: 'Learn JSX', important: false },
  { id: 3, text: 'Learn aplication', important: false },
];

const App = () => {
  return (
    <div className="container">
      <Header />
      <Search />
      <ListTodo tasks={tasks} />
    </div>
  );
};

export default App;
