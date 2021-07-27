import React from 'react';

import ListItemTodo from './ListItemTodo';

const ListTodo = () => {
  return (
    <ul>
      <li>
        <ListItemTodo />
      </li>
      <li>
        <ListItemTodo />
      </li>
      <li>
        <ListItemTodo />
      </li>
    </ul>
  );
};

export default ListTodo;
