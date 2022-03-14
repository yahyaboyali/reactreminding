import React from 'react'
import { Container,Button,Nav,Navbar} from 'react-bootstrap';
import SignedIn from './SignedIn';
export default function Navi() {
  return (
    <Navbar bg="dark" variant='dark' expand="sm">
            <Container fluid="md">
                <Navbar.Brand>react</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link >Home</Nav.Link>
                        <Nav.Link >Link</Nav.Link>
                    </Nav>
                    <SignedIn style={{ margin: "10px"}}/>
                    <Button variant="primary">Sign Up</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}
