import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Form, FormControl, Button } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <header className='nav-wrapper'>        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Inves</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#Investors">Investors</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Service">Service</Nav.Link>
              <Nav.Link href="#Press">Press</Nav.Link>
              <Nav.Link href="#Blog">Blog</Nav.Link>
              <Nav.Link href="#Contact us">Contact us</Nav.Link>
            </Nav>            
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}

export default Navigation
