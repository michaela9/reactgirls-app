import styled from 'styled-components';
import { sizes, colors } from '../../variables.js';


export const FooterLogo = styled.h1`
    height: 160px;
    width: 160px;
    border-radius:80px;
    top: -30px;
    background-image: url('images/logo-blue.svg');
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const FooterContainer = styled.h1`
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
`;

export const FooterInfo = styled.p`
    text-align: center;
    font-weight: 300;
    font-size: ${sizes.sizeXS};
`;