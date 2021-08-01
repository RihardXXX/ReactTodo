import React from 'react';
import './ListItemTodo.css';

var classNames = require('classnames');

const ListItemTodo = ({
  text,
  onDelete,
  onDone,
  onImportant,
  done,
  important,
}) => {
  let css = classNames('listItemTodo', { done }, { important });

  return (
    <span className={css}>
      <span className="text" onClick={onDone}>
        {text}
      </span>
      <span>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={onImportant}
        >
          <i className="fas fa-exclamation"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={onDelete}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </span>
    </span>
  );
};

export default ListItemTodo;
