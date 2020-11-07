import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { sizes, colors } from '../../variables.js';


export const Nav = styled.nav`
  display: flex;
  width:100%;
  background-color: ${colors.white};
  height: 100px;
  position: sticky;
  z-index:999;
  padding: 0px 150px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width:100%;
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
  margin-left: 20px;

&:hover {
  border-bottom: 2px solid blue;
}
`;

export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
`;
