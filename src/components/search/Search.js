import React, { Component } from 'react';

import './Search.css';

var classNames = require('classnames');

export default class Search extends Component {
  onQuerySearch = (e) => {
    const { setQuery } = this.props;
    setQuery(e.target.value.toLowerCase());
  };

  onFilter = (params) => {
    const { setArg } = this.props;
    setArg(params);
  };

  buttons = [
    { css: 'btn btn-outline-primary', name: 'all' },
    { css: 'btn btn-outline-primary', name: 'active' },
    { css: 'btn btn-outline-primary', name: 'done' },
  ];

  render() {
    const { arg } = this.props;
    const renderButtons = this.buttons.map((btn) => {
      let clazz = classNames(btn.css, { active: arg === btn.name });
      return (
        <button
          type="button"
          className={clazz}
          onClick={() => this.onFilter(btn.name)}
          key={btn.name}
        >
          {btn.name}
        </button>
      );
    });

    return (
      <div className="search">
        <input
          type="text"
          placeholder="search task"
          onChange={this.onQuerySearch}
        />
        {renderButtons}
      </div>
    );
  }
}
