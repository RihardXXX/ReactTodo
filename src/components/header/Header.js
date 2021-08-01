import React from 'react';

import './Header.css';

const Header = ({ todoCount, doneCount }) => {
  return (
    <div className="header">
      <h1>React Todo</h1>
      <span className="info">
        [ {todoCount} ] more to do. [ {doneCount} ] done{' '}
      </span>
    </div>
  );
};

export default Header;
