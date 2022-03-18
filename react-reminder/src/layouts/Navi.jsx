import React, {useState} from 'react'
import { Container,Nav,Navbar} from 'react-bootstrap';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { Link} from 'react-router-dom';

export default function Navi() {
   const personName="yahya"
    const [isAuthenticated,setIsAuthenticated] =useState(true)
    function handleSignOut() {
        setIsAuthenticated(false)
    }
    function handleSignIn() {
        setIsAuthenticated(true)
    }
  return (
    <Navbar bg="dark" variant='dark' expand="sm">
            <Container fluid="md">
                <Navbar.Brand as={Link} to="/">
                Kitap takip
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to={`/DailyRoutines/`}>genel routine</Nav.Link>
                    </Nav>
                    {
                        isAuthenticated?<SignedIn signOut={handleSignOut}/>
                        :<SignedOut signIn={handleSignIn}/>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}
