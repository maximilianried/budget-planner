import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function MainNavbar() {
  return (
    <Navbar bg="dark" variant="dark" className="sticky-top">
      <Container>
        <Navbar.Brand href="#home">🏦</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Budgets</Nav.Link>
          <Nav.Link href="#features">Statistic</Nav.Link>
          <Nav.Link href="#pricing">Settings</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
