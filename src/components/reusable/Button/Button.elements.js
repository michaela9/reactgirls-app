import styled, {css} from 'styled-components';
import { sizes, colors } from '../../../variables.js';


export const CustomButton = styled.button`
    background-color: ${colors.mainBlue};
    border: none;
    height: 50px;
    padding: 0 32px;
    border-radius: 25px;
    color: ${colors.white};
    box-shadow: 0px 4px 2px rgba(68, 68, 68, 0.15);
    letter-spacing: 1px;
    font-weight: 500;
    ${({hidebutton}) => hidebutton && css`
    display: none;
    `}

`;
