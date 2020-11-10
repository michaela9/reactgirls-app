import React, { useState } from 'react';
import { 
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
    NavWrapper,
    Nav,
    Social,
    SocialIcon
    } from './Navbar.elements';

    import { Container } from '../../components/reusable/styled';
    import { Link } from 'react-router-dom';


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
                <Social>
                        <Link to="https://www.facebook.com/">
                            <SocialIcon src="/images/icons/facebook.svg" />
                        </Link>
                        <Link to="https://www.linkedin.com/">
                            <SocialIcon src="/images/icons/linkedIn.svg" />
                        </Link>
                        <Link to="https://www.instagram.com/">
                            <SocialIcon src="/images/icons/instagram.svg" />
                        </Link>
                        <Link to="https://www.youtube.com/">
                            <SocialIcon src="/images/icons/youtube.svg" />
                        </Link>
                        <Link to="https://www.twitter.com/">
                            <SocialIcon src="/images/icons/twitter.svg" />
                        </Link>
                    </Social>
                </Nav>
    )
}

export default Navbar
