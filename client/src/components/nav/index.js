import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import logo from "../../images/logo.svg";

import './index.scss';

const TraceNavComponent = () => {
  return (
    <Navbar data-testid='navbar'>
      <Navbar.Brand href="" className='nav'>
        <img
          alt="logo"
          src={logo}
          width="300"
          height="50"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
    </Navbar>
  )
};

export default TraceNavComponent;
