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
    import socialArr from './socialArr';


function Navbar() {
    const [click, setClick] = useState(false);
    const [navLogo, setNavLogo] = useState(false);

    const handleClick = () => setClick(!click);
    const changeLogoSize = () => {
        if(window.scrollY >= 80) {
            setNavLogo(true)
        }else{
            setNavLogo(false)
        }
    };
    window.addEventListener('scroll', changeLogoSize);
    return (
        <Nav>
            <Container>
                <NavWrapper>
                    <Link to='/'>
                    <NavLogo src="/images/logo-blue.svg" className={navLogo ? 'active' : ''} />
                    </Link>
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
                {socialArr.map((social) => (
                    <a href={social.link}>
                        <SocialIcon src={social.icon} />
                    </a>
                    )
                )}
            </Social>
        </Nav>
    )
}

export default Navbar
