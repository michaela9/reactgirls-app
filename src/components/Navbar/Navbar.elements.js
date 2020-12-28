import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../variables';

export const Nav = styled.div`
    width: 100%;
    box-shadow: 0px 3px 3px rgba(68, 68, 68, 0.05);
    z-index: 1000;
    position: sticky;
    top: 0;
`;

export const NavWrapper = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    //border: 1px solid pink;
   // padding: 0.5em 0;
    height: 80px;
`;

export const NavLogo = styled.img`
    height: 160px;
    width: 160px;
    border-radius:80px;
    position: relative;
    transition: all 1.5s ease-in-out;
    top: 80px;
    cursor: pointer;

    &.active {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        position: relative;
        top: 0;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: space-between;
    //border: 1px solid pink;
`;

export const NavItem = styled.li`
    border-bottom: 2px solid transparent;
    font-weight: 400;
    color:${colors.grey};
    margin-left: 2em;
`;

export const NavLinks = styled(NavLink)`
    display: flex;
    text-decoration: none;

&:hover {
    color: ${colors.mainBlue} ;
}
`;

export const Social = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: space-between;
    top: 110px;
    right: 70px;

    @media only screen and (max-width: 768px) {
        right: 20px;
    }
`;

export const SocialIcon = styled.img`
    width: 22px;
    height: 22px;
    margin-bottom: 18px;

    @media only screen and (max-width: 768px) {
        width: 20px;
        height: 20px;
        margin-bottom: 14px;
    }
`;

