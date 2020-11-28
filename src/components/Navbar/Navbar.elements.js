import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { sizes, colors } from '../../variables.js';

export const Nav = styled.div`
//position: fixed;
    width: 100%;
    box-shadow: 0px 6px 6px rgba(68, 68, 68, 0.05);
    z-index: 1000;
    position: sticky;
    top: 0;

`;

export const NavWrapper = styled.div`
    height: 70px;
    width: 1280px;
    display: flex;
    margin: 0 auto;
    padding: 10px 50px;
    align-items: center;
    justify-content: space-between;

`;


export const NavLogo = styled.img`
    height: 160px;
    width: 160px;
    border-radius:80px;
    position: relative;
    top:80px;
    background-image: url('images/logo-blue.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    width: 50%;
    justify-content: space-between;
`;

export const NavItem = styled.li`
    border-bottom: 2px solid transparent;
    font-weight: 400;
    color:${colors.grey};

`;

export const NavLinks = styled(Link)`
    display: flex;
    text-decoration: none;

&:hover {
    color: ${colors.mainBlue} ;
}
&:focus {
    text-decoration: underline ;
}
`;

export const Social = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: space-between;
    top: 110px;
    right: 70px;
`;

export const SocialIcon = styled.img`
    width: 22px;
    height: 22px;
    margin-bottom: 18px;
`;

