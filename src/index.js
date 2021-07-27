import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Search from './components/Search';
import ListTodo from './components/ListTodo';

const list = ['Learn React', 'Learn Redux', 'Learn JSX', 'Learn aplication'];

const App = () => {
  return (
    <div>
      <Header />
      <Search />
      <ListTodo />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
