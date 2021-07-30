import React, { Component } from 'react';

import './ListItemTodo.css';

export default class ListItemTodo extends Component {
  render() {
    const { text, important = false } = this.props;

    const style = {
      color: important ? 'tomato' : 'black',
    };
    return <span style={style}>{text}</span>;
  }
}
