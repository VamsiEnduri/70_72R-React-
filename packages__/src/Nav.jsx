import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
const Nav_ = () => {
  return (
    <div>
         <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#features">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Nav_