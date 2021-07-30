import React, { Component } from 'react';

import './Search.css';

export default class Search extends Component {
  render() {
    return (
      <div className="search">
        <input type="text" placeholder="search task" />
        <button type="button" className="btn active btn-outline-primary">
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
