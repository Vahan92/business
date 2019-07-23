import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
class Navigation extends Component {
  render() {
    const info = ['Home', 'Investors', 'About', 'Service', 'Blog', 'Contact us'];
    return (
      <header className='nav-wrapper'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Inves</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {info.map(el => (
                <Nav.Link href={`#${el}`} key={el}>{el}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}

export default Navigation
