import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Tahoma, sans-serif;
}
`;

export const Container = styled.div`
z-index:1;
width: 100%;
padding-right:250px;
padding-left: 250px;


`;


export default GlobalStyle;