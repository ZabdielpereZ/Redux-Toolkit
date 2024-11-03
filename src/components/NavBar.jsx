import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from "react-bootstrap";

const NavBar = () => {
  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Fitness Tracker App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/exercises">Exercises</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar
