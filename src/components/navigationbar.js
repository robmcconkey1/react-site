import React from 'react';
import {Nav, Navbar, NavDropdown, NavLink} from 'react-bootstrap'
import styled from 'styled-components'



const Styles = styled.div`

`;
export const NavigationBar = () => (
  <Styles>
  <Navbar expand="lg">
  <Navbar.Brand href="/"> Home </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className= "navBar">
  <Nav.Item><NavLink href="/"> Home </NavLink> </Nav.Item>
<Nav.Item><NavLink href="/travel"> Travel </NavLink> </Nav.Item>
<Nav.Item><NavLink href="/street"> Street </NavLink> </Nav.Item>
<Nav.Item><NavLink href="/weddings"> Weddings </NavLink> </Nav.Item>
<Nav.Item><NavLink href="https://www.instagram.com/rob_mcconkey/?hl=en" target="_blank"> Instagram </NavLink> </Nav.Item>
<NavDropdown title="Blog" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Canterbury</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">London Mews</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">London Underground</NavDropdown.Item>

      </NavDropdown>

</Nav>
  </Navbar.Collapse>
  </Navbar>
  </Styles>
)
