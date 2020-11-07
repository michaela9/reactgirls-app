import React, { useState } from 'react';
import { 
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
    NavWrapper
    } from './Navbar.elements';

    import { Container } from '../../components/reusable/styled';


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
                <Container>
                    <NavWrapper>
                        <NavLogo />
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
                                <NavLinks to='/'>Kontakt</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavWrapper>
                </Container>
    )
}

export default Navbar
