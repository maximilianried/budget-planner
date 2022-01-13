import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function MainNavbar() {
  return (
    <Navbar bg="dark" variant="dark" className="sticky-top">
      <Container>
        <Navbar.Brand href="/budget">🏦</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/budget">Budgets</Nav.Link>
          <Nav.Link href="/statistic">Statistics</Nav.Link>
          <Nav.Link href="/setting">Settings</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
