import React, { Component } from 'react';

import './Search.css';

export default class Search extends Component {
  state = {
    all: false,
    active: false,
    done: false,
  };

  onQuerySearch = (e) => {
    const { setQuery } = this.props;
    setQuery(e.target.value.toLowerCase());
  };

  render() {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="search task"
          onChange={this.onQuerySearch}
        />
        <button type="button" className="btn btn-outline-primary active">
          all
        </button>
        <button type="button" className="btn btn-outline-secondary">
          active
        </button>
        <button type="button" className="btn btn-outline-success">
          done
        </button>
      </div>
    );
  }
}
