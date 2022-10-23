import React from 'react';
import NavBottomBox from './NavBottomBox';
import NavMiddleBox from './NavMiddleBox';
import NavTopBox from './NavTopBox';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="navContainer">
      <NavTopBox />
      <NavMiddleBox />
      <NavBottomBox />
    </div>
  );
};

export default Nav;
