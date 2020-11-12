import styled from 'styled-components';
import { sizes, colors } from '../../../variables.js';


export const CustomButton = styled.button`
    background-color: ${colors.mainBlue};
    border: none;
    padding: 14px 35px;
    border-radius: 25px;
    color: ${colors.white};
    box-shadow: 0px 4px 2px rgba(68, 68, 68, 0.15);
    letter-spacing: 1px;
    font-weight: 500;
    display: $ {({button}) => (button ? button : none)};
`;
