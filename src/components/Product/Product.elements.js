import styled from 'styled-components';
import { colors } from '../../variables.js';
import { Paragraph } from '../reusable/styled';

export const ProductInfoContainer = styled.div`
    display: flex;
    flex-direction:column;
    max-width: 50%;
    margin-right: 50px;
    justify-content: center;
    align-items: flex-start;
`;

export const ProductInfo = styled(Paragraph)`
    font-weight: 300;
    line-height: 1.8;
    margin-bottom: 32px;
    margin-top: 32px;
    color: ${colors.grey};
    a{
        color: ${colors.mainBlue};
        font-weight: 500;
        cursor: pointer; 

    }
`;

export const ProductImg = styled.img`
    width: auto;
    height: 380px;
`;

export const ProductImgContainer = styled.div`
    width: 380px;
    height: 380px;
    border-radius: 240px;
    overflow: hidden;
`;



