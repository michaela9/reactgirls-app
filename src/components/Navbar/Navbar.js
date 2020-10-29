import React from 'react';
import { Nav, NavbarContainer, NavLogo } from './Navbar.elements';




function Navbar() {
    return (
        <>
            <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    ReactGirls
                </NavLogo>
            </NavbarContainer>
            </Nav>
            
        </>
    )
}

export default Navbar
