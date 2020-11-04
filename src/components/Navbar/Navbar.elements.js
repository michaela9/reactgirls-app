import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Nav = styled.nav`
  display: flex;
  width:100%;
  background: white;
  height: 100px;
  position: sticky;
  z-index:999;
  padding: auto 150px;
  padding: 0px 150px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width:100%;
`;

export const NavLogo = styled.h1`
  height: 160px;
  width: 160px;
  border-radius:80px;
  position: relative;
  top: 50px;
  background-image: url('images/logo-reactgirls.png');
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;

export const NavItem = styled.li`
  border-bottom: 2px solid transparent;
  margin-right: 20px;

&:hover {
  border-bottom: 2px solid blue;
}
`;

export const NavLinks = styled(Link)`
  color: black;
  font-size: 18px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
`;
