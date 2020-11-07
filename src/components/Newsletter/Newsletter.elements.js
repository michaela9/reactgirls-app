import styled from 'styled-components';
import { sizes, colors } from '../../variables.js';

export const Title = styled.h1`
    font-size: ${sizes.sizeXXXL};
    font-weight: 900;
    margin-bottom: 30px;
    text-align: center;
`;

export const SubTitle = styled.p`
    font-weight: 300;
    margin-bottom: 30px;
    text-align: center;
`;

export const TitleContainer = styled.div `
    display: flex;
    max-width: 680px;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;
