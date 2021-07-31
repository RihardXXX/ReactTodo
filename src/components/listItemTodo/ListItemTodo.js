import React, { Component } from 'react';
import './ListItemTodo.css';

var classNames = require('classnames');

export default class ListItemTodo extends Component {
  state = {
    done: false,
    important: false,
    mainClass: 'listItemTodo',
  };

  onDone = () => {
    this.setState({
      done: true,
    });
  };

  onImportant = () => {
    this.setState({
      important: true,
    });
  };

  render() {
    const { text } = this.props;
    const { done, mainClass, important } = this.state;

    let css = classNames(mainClass, { done }, { important });

    return (
      <span className={css}>
        <span className="text" onClick={this.onDone}>
          {text}
        </span>
        <span>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={this.onImportant}
          >
            <i className="fas fa-exclamation"></i>
          </button>
          <button type="button" className="btn btn-outline-danger">
            <i className="far fa-trash-alt"></i>
          </button>
        </span>
      </span>
    );
  }
}
