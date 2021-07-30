import React from 'react';

import ListItemTodo from '../listItemTodo';

import './ListTodo.css';

const ListTodo = ({ tasks }) => {
  const tasksRender = tasks.map(({ id, ...textImportant }) => {
    return (
      <li
        key={id}
        className="list-group-item d-flex d-flex justify-content-between"
      >
        <ListItemTodo {...textImportant} />
        <span>
          <button type="button" className="btn btn-outline-success">
            <i className="fas fa-exclamation"></i>
          </button>
          <button type="button" className="btn btn-outline-danger">
            <i className="far fa-trash-alt"></i>
          </button>
        </span>
      </li>
    );
  });

  return <ul className="list-group listTodo">{tasksRender}</ul>;
};

export default ListTodo;
