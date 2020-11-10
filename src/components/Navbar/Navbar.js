import React, { useState } from 'react';
import { 
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
    NavWrapper,
    Nav
    } from './Navbar.elements';

    import { Container } from '../../components/reusable/styled';


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
                <Nav>
                <Container>
                    <NavWrapper>
                        <NavLogo />
                        <NavMenu onClick = {handleClick}>
                            <NavItem>
                                <NavLinks to='/'>Úvod</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/about'>O nás</NavLinks>
                            </NavItem>                        
                            <NavItem>
                                <NavLinks to='/mentoring'>Mentoring</NavLinks>
                            </NavItem>                        
                            <NavItem>
                                <NavLinks to='/academy'>Akademie</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/contact'>Kontakt</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavWrapper>
                </Container>
                </Nav>
    )
}

export default Navbar
