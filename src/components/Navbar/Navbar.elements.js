import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors, breakpoints, sizes } from '../../variables';

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
    height: 80px;

    @media screen and (max-width: ${breakpoints.tablet}) {
        margin-right: 16px;
        margin-left: 16px;
        justify-content: flex-end;
        &.active {
            justify-content: space-between;
    }
    }

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
        //position: static;
        position: relative;
        top: 0;
    }

    @media screen and (max-width: ${breakpoints.tablet}) {
        height: 140px;
        width: 140px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 1.5s ease-in-out;
        position: absolute;           
        left: 50%;
        top: 35px;
        transform: translateX(-50%);
        &.active {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            position: relative;
            top: 0;
            transform: none;
            left: 0;
        }
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: space-between;
    //border: 1px solid blue;

    @media screen and (max-width: ${breakpoints.tablet}) {
        display: flex;
        flex-direction: column;
        width: 100%;
        transition: all 1.5s ease-in-out;
        position: absolute;
        top: 80px;
        right: ${({click}) => (click ? 0 : '-100%')};
        padding-bottom: 20px;
        opacity: 1;
        background-color: ${colors.white};
    }
`;

export const NavItem = styled.li`
    border-bottom: 2px solid transparent;
    font-weight: 400;
    color:${colors.grey};
    margin-left: 2em;
    //border: 1px solid red;
   
    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 100%;
        margin: 0 auto;
    }
`;

export const NavLinks = styled(NavLink)`
    display: flex;
    text-decoration: none;
    align-items: center;
    height: 100%;
    //border: 1px solid red;
    &:hover {
        color: ${colors.mainBlue} ;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        text-align: center;
        width: 100%;
        padding: 20px;
        display: table;
        font-size: ${sizes.sizeS};
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
    :hover{
        filter: invert(100%);
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: ${breakpoints.tablet}) {
        display: flex;
        cursor: pointer;

    }
    :hover{
        filter: invert(100%);
    }
`;

export const MobileIconClose = styled.img`
    width: 20px;
`;

export const MobileIconMenu = styled.img`
    width: 25px;
`;


