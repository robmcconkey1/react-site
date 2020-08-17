import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import styled from 'styled-components'



const Styles = styled.div`

`;
export const NavigationBar = () => (
  <Styles>
  <Navbar expand="lg">
  <Navbar.Brand href="/"> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className= "ml-auto">
  <Nav.Item><Nav.Link href="/"> Home </Nav.Link> </Nav.Item>
<Nav.Item><Nav.Link href="/street"> Street </Nav.Link> </Nav.Item>
<Nav.Item><Nav.Link href="/travel"> Travel </Nav.Link> </Nav.Item>
<Nav.Item><Nav.Link href="/weddings"> Weddings </Nav.Link> </Nav.Item>
<Nav.Item><Nav.Link href="https://www.instagram.com/rob_mcconkey/?hl=en" target="_blank"> Instagram </Nav.Link> </Nav.Item>
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
