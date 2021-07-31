import React from 'react';

import ListItemTodo from '../listItemTodo';

import './ListTodo.css';

const ListTodo = ({ tasks, onDeleteTask }) => {
  const tasksRender = tasks.map(({ id, ...textImportant }) => {
    return (
      <li key={id} className="list-group-item">
        <ListItemTodo {...textImportant} onDelete={() => onDeleteTask(id)} />
      </li>
    );
  });

  return <ul className="list-group listTodo">{tasksRender}</ul>;
};

export default ListTodo;
