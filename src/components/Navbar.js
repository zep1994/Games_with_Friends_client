import React from 'react';
import { Link } from "react-router-dom";
import { Navbar as BNav, Nav, NavItem } from "react-bootstrap";

const Navbar = () => {
    return (
        <BNav>
            <BNav.Header>
                <BNav.Brand>
                    <Link to='/' exact>Drinking Game</Link>
                </BNav.Brand>
            </BNav.Header>
            <Nav>
                <NavItem>
                    <Link to='/about' exact>About</Link>
                </NavItem>
            </Nav>
            <NavItem>
                <Link to="/games" exact>Games</Link>
            </NavItem>
        </BNav>
    )
}

export default Navbar