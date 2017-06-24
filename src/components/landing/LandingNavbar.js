import React, { Component } from 'react';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import './styles/LandingNavbar.css';

class LandingNavbar extends Component {
  render() {
    return (
      <Navbar
        id='LandingNavbar'
        className={this.props.scrolled ? 'LandingNavbar--scrolled' : ''} 
        fixedTop
        collapseOnSelect
        fluid
      >
        <Navbar.Header>
          <Navbar.Brand>
            <a className='LandingNavbar__brand'>Sport<span className="LandingNavbar__brand--partner">Partner</span></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem className='LandingNavbar__NavItem' eventKey={1}>How It Works</NavItem>
            <NavItem className='LandingNavbar__NavItem' eventKey={2}>Features</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={2} className='LandingNavbar__Button'>Join Now</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default LandingNavbar;
