import React from 'react'
import { Nav, Navbar} from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const NavHead = () => {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
  return (
    
   <div className="navHead">
        <Navbar id="navbar" expand="lg" sticky="top">
    <Navbar.Brand className="text-white align-items-center" href="#home" ><span id="brand">DREAMGIRL</span> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto">
    <Link className="nav-link mr-5 text-warning text-bold" to="/home">HOME</Link>
    <Link className="nav-link mr-5 text-warning " to="/login">LOGIN</Link>
    <Link className="nav-link mr-5  text-warning" to="/dashboard">ABOUT</Link>
    <Link className="nav-link mr-5  text-warning" to="/contact">CONTACT</Link>
    <Link className="nav-link mr-5  text-warning" to="/#">REVIEW</Link>
    </Nav>
    <Nav className="ms-auto">
    <div className="badge">
    <Link to="/cart" ><FontAwesomeIcon className="icon" icon={faShoppingCart} />
                {cartItems.length> 0 && (
                    <span className="badge">{cartItems.length}</span>
                )}
                </Link>
    </div>
    </Nav>
    </Navbar.Collapse>
   </Navbar>
    
   </div>
  )
}

export default NavHead
