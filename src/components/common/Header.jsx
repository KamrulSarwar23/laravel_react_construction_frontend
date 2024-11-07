import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="container py-3">
        <Navbar expand="lg">
          <Navbar.Brand as={Link} to="/" className="logo">
            <span>UrbanEdge</span> Constructions
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" className="nav-link">
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/about-us" className="nav-link">
                About Us
              </Nav.Link>

              <Nav.Link as={NavLink} to="/services" className="nav-link">
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to="/projects" className="nav-link">
                Projects
              </Nav.Link>
              <Nav.Link as={NavLink} to="/blogs" className="nav-link">
                Blogs
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact-us" className="nav-link">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
