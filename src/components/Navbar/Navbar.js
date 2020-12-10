import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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

    import socialArr from './socialArr';


function Navbar() {
    const [click, setClick] = useState(false);
    const [navLogo, setNavLogo] = useState(false);
    const [isMyFirstRoute, setIsMyFirstRoute] = useState(true);
    let history = useHistory();

    const handleClick = () => setClick(!click);
    const changeLogoSize = () => {
        if(window.scrollY >= 80) {
            setNavLogo(true)
        }else{
            setNavLogo(false)
        }
    };

   function handleRouteChange (route: string) {
        if(isMyFirstRoute){
            setIsMyFirstRoute(false);
        }
        history.push();
    };
    window.addEventListener('scroll', changeLogoSize);
    return (
        <Nav>
            <Container>
                <NavWrapper>
                    <div onClick={() => handleRouteChange('/')}>
                        <NavLogo src="/images/logo-blue.svg" className={navLogo ? 'active' : ''} />
                    </div>
                    <NavMenu onClick = {handleClick}>
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
            </Container>
            <Social>
                {socialArr.map((social) => (
                    <a href={social.link} target="blank">
                        <SocialIcon src={social.icon} />
                    </a>
                    )
                )}
            </Social>
        </Nav>
    )
}

export default Navbar
