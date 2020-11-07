import styled, {createGlobalStyle} from 'styled-components';
import { sizes, colors } from './variables.js';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: ${sizes.sizeM};
    color: ${colors.darkGrey};
}
`;

export const Container = styled.div`
    z-index:1;
    width: 100%;
    padding: 100px 150px;
`;

export const ContainerColor = styled.div`
    z-index:1;
    width: 100%;
    padding: 100px 150px;
    background-color: rgba(212, 237, 240, 0.47);
`;


export const Button = styled.button`
    font-size: 18px;
    border: none;
    border-radius:30px;
    background-color: rgb(0,180,205);
    color: white;
    padding: 10px 35px;

    &:hover {
        background: black;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 105px;
    align-items: flex-start;
    justify-content: space-between;
`;





export default GlobalStyle;