import styled from 'styled-components';
import { Container } from '../../globalStyles';


export const Nav = styled.nav`
background: snow;
height: 80px;
display: flex;
justify-content: center;
align-items:center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index:999;
`;

export const NavbarContainer = styled(Container)`
disply: flex;
justify-content: space-between;
height: 80px;

${Container}  
`;


export const NavLogo = styled.h1`
  color: blue;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

