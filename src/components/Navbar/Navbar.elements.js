import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';


export const Nav = styled.nav`
background: white;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index:999;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 100px;

${Container}  
`;


export const NavLogo = styled.img`
 height: 160px;
 width: 160px;
background-image: url('/public/images/logo-reactgirls.png');
border-radius: 80px;
border: 1px solid red;
position: relative;
top: 50px;

`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
`;

export const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;

&:hover {
  border-bottom: 2px solid blue;
}
`;
export const NavLinks = styled(Link)`
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;

`
