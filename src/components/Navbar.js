import React from 'react';
import {
    Nav,
    NavHeader,
    NavItems,
    NavItem
} from '../Styled/Navbar';
function Navbar() {
    return (
            <Nav>
                <NavHeader to="/">Harshitha Sompura</NavHeader>
                <NavItems>
                    <NavItem to="/" >Work</NavItem>
                    <NavItem to="/about" >About</NavItem>
                    <a href="\assets\resume.pdf" download rel="noopener noreferrer" target="_blank">Resume</a>
                </NavItems>
            </Nav>
    )
}

export default Navbar
