import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';


const NavbarComponent = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/users/register">Register</Nav.Link>
                    <Nav.Link href="/users/login">Login</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )

}

export default NavbarComponent