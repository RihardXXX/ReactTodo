import React from 'react';

import ListItemTodo from '../listItemTodo';

import './ListTodo.css';

const ListTodo = ({ tasks }) => {
  const tasksRender = tasks.map(({ id, ...textImportant }) => {
    return (
      <li key={id} className="list-group-item">
        <ListItemTodo {...textImportant} />
      </li>
    );
  });

  return <ul className="list-group listTodo">{tasksRender}</ul>;
};

export default ListTodo;
