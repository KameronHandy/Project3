import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Organizer</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Organizer">To Do List</Nav.Link>
            <Nav.Link href="/History">History</Nav.Link>
            <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



    </>
  );
}

export default ColorSchemesExample;