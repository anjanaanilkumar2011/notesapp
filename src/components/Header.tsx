import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        
        React Bootstrap
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default header
