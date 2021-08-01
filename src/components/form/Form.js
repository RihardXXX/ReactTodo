import React from 'react';

import './Form.css';

const Form = ({ onAddTask }) => {
  const addTask = (e) => {
    e.preventDefault();

    onAddTask('message');
  };

  return (
    <form className="form">
      <label>Tasks text</label>
      <div className="form-wrapper">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task"
          refs="task"
        />
        <button type="submit" className="btn btn-primary" onClick={addTask}>
          add task
        </button>
      </div>
    </form>
  );
};

export default Form;
