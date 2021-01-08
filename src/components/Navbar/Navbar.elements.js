import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors, breakpoints } from '../../variables';

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
    border-radius: 50%;
    position: relative;
    transition: all 1.5s ease-in-out;
    top: 80px;
    cursor: pointer;

    &.active {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: relative;
        top: 0;
    }

    @media screen and (max-width: ${breakpoints.tablet}) {
        margin: 0 auto;
        position: relative;
        left: 5%;
        border-radius: 50%;
        transition: all 1.5s ease-in-out;
        cursor: pointer;
        &.active {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            position: relative;
            top: 0;
            left: -39%;
    }
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: space-between;
    //border: 1px solid pink;

    @media screen and (max-width: ${breakpoints.tablet}) {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 80px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        background-color: ${colors.white};
    }
`;

export const NavItem = styled.li`
    border-bottom: 2px solid transparent;
    font-weight: 400;
    color:${colors.grey};
    margin-left: 2em;
   
    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 100%;

    }
`;

export const NavLinks = styled(NavLink)`
    display: flex;
    text-decoration: none;
    align-items: center;
    height: 100%;
    &:hover {
        color: ${colors.mainBlue} ;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        text-align: center;
        width: 100%;
        padding: 37px;
        display: table;
        //box-shadow: 0px 1px 1px rgba(68, 68, 68, 0.1);
        &:hover {
            color: ${colors.mainBlue};
            transition: all 0.3 ease;
        }
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

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: ${breakpoints.tablet}) {
        display: flex;
        cursor: pointer;
    }
`;

export const MobileIconClose = styled.img`
            height: 30px;
`;

export const MobileIconMenu = styled.img`
            height: 45px;
`;

