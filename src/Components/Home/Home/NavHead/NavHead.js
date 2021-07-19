import React from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NavHead = () => {
  return (
    
   <div className="navHead">
        <Navbar id="navbar" expand="lg" sticky="top">
    <Navbar.Brand className="text-white align-items-center" href="#home" ><span id="brand">DREAMGIRL</span> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    
    </Nav>
    <Nav className="ms-auto">
    <Link className="nav-link mr-5 ms-5 text-white" to="/home">Home</Link>
    <Link className="nav-link mr-5 ms-5 text-white " to="/login">Login</Link>
    <Link className="nav-link mr-5  ms-5 text-white" to="/dashboard">Dashboard</Link>
    <Link className="nav-link mr-5  ms-5 text-white" to="/contact">Contact Us</Link>
    </Nav>
    </Navbar.Collapse>
   </Navbar>
    
   </div>
  )
}

export default NavHead
