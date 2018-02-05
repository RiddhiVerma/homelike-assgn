import React from 'react';

import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import './index.css';
const logo = require('./GitHub-Mark.png')
class Header extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              <img src={logo}/>
            </a>
            <label className="search form-control">
              <a href="/">This repository
              </a>
              <input placeholder="Search"/>
            </label>
            <ul className="topnav">
              <li>Pull requests</li>
              <li>Issues</li>
              <li>Marketplace</li>
              <li>Explore</li>
            </ul>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <div>
          <Nav pullRight>
            <NavItem
              eventKey={1}
              href="#">
              Hello, User
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    );
  }
}
export default Header;