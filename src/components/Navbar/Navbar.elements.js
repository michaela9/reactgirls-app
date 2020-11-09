import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { sizes, colors } from '../../variables.js';

export const NavWrapper = styled.div`
    height: 100px;
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
  top:50px;
  background-image: url('images/logo-reactgirls.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;

export const NavItem = styled.li`
  border-bottom: 2px solid transparent;
  margin-left: 30px;

&:hover {
  border-bottom: 2px solid ${colors.mainBlue} ;
}
`;

export const NavLinks = styled(Link)`
  display: flex;
  text-decoration: none;
  margin-left: 30px;
`;
