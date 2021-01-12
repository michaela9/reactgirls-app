import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { 
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
    NavWrapper,
    Nav,
    Social,
    SocialIcon,
    MobileIcon,
    MobileIconMenu,
    MobileIconClose
    } from './Navbar.elements';

import { Container, Wrapper } from '../../components/reusable/styled';
import socialArr from './socialArr';

function Navbar() {
    const [click, setClick] = useState(false);
    const [navLogo, setNavLogo] = useState(false);

    const handleClick = () => setClick(!click);
    
    const toggleHome = () => {
        scroll.scrollToTop()
    }
    const changeLogoSize = () => {
        setNavLogo(true);
    }
    window.addEventListener("scroll", changeLogoSize);
    return (
        <Nav>
            <Container>
                <Wrapper>
                    <NavWrapper> 
                        <NavLogo onClick={toggleHome} smooth={true} src="/images/logo-blue.svg" className={navLogo ? 'active' : ''} />
                        <MobileIcon onClick={handleClick}>
                            {click ? <MobileIconClose src="/images/icons/close.svg"/> : <MobileIconMenu src="/images/icons/menu.svg"/> }
                        </MobileIcon>
                    
                        <NavMenu onClick = {handleClick} click={click}>
                            <NavItem>
                                <NavLinks activeStyle={{ color: '#00B4CD' }} exact to='/'>Úvod</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks activeStyle={{ color: '#00B4CD'  }} to='/about'>O nás</NavLinks>
                            </NavItem>                        
                            <NavItem>
                                <NavLinks activeStyle={{ color: '#00B4CD' }} to='/mentoring'>Mentoring</NavLinks>
                            </NavItem>                        
                            <NavItem>
                                <NavLinks activeStyle={{ color: '#00B4CD' }} to='/academy'>Akademie</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks activeStyle={{ color: '#00B4CD' }} to='/contact'>Kontakt</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavWrapper> 
                </Wrapper>
            </Container>
            <Social>
                {socialArr.map((social) => (
                    <a key={social.link} href={social.link} target="blank">
                        <SocialIcon src={social.icon} />
                    </a>
                    )
                )}
            </Social>
        </Nav>
    )
}

export default Navbar
