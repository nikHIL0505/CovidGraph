import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar bg="dark" fixed="top" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "#33cccc", fontWeight: "600" }}>
          Covid Tracker
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
