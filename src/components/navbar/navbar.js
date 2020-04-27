import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
const  CostumNavbar =() =>{
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Pazar43</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#features">All items</Nav.Link>
                <Nav.Link href="#pricing">Categories</Nav.Link>
                <NavDropdown title="Contact " id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">For advertisements</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">For collaboration</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">For Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">About us</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                {/*<Nav.Link href="#deets">More deets</Nav.Link>*/}
                <Nav.Link eventKey={2} href="/login">
                    Log in
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}
export default CostumNavbar;