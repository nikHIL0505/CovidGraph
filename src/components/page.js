import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./navbar";
import Dashboard from "./dashboard/dashboard";
const Page = () => {
  return (
    <Container fluid>
      <Navbar />
      <Dashboard />
    </Container>
  );
};
export default Page;
