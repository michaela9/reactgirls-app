import React, { useState } from 'react';
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks
    } from './Navbar.elements';







function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        ReactGirls
                    </NavLogo>
                    <NavMenu onClick = {handleClick}>
                        <NavItem>
                            <NavLinks to='/'>Úvod</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'>O nás</NavLinks>
                        </NavItem>                        
                        <NavItem>
                            <NavLinks to='/'>Mentoring</NavLinks>
                        </NavItem>                        
                        <NavItem>
                            <NavLinks to='/'>Akademie</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'>KONTAKT</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav> 
        </>
    )
}

export default Navbar
