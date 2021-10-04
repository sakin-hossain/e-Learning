import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css";


const Header = () => {
    return (
        <div>
                <Navbar className="navbar" collapseOnSelect expand="lg">
                <Container>
                <div className="logo">
                    <h3>e-Learning</h3>
                </div>
                <div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/courses">Courses</NavLink>
                            <NavLink to="/instructor">Become An Instructor</NavLink>
                            <NavLink to="/about">About Us</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                </Container>
                </Navbar>
        </div>
    );
};

export default Header;