import React from 'react'
import { Container,Button,Nav,Navbar} from 'react-bootstrap';
import SignedIn from './SignedIn';
export default function Navi() {
  return (
    <Navbar bg="dark" variant='dark' expand="sm">
            <Container fluid="md">
                <Navbar.Brand>Kitap takip</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link >Şimdilik boş</Nav.Link>
                        <Nav.Link >Şimdilik boş</Nav.Link>
                    </Nav>
                    <SignedIn/>
                    <Button variant="primary">giriş yap</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}
