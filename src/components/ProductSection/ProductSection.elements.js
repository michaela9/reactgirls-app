import styled from 'styled-components';
import { sizes, colors } from '../../variables.js';

export const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0 50px;
`; 

export const WrapperReverse = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
`; 

export const ProductTitle = styled.h1`
    font-size: ${sizes.sizeXXXL} ;
    font-weight: 900;
    text-align: center;
`;

export const ProductInfoContainer = styled.div`
    display: flex;
    flex-direction:column;
    max-width: 50%;
    margin-right: 50px;
    justify-content: center;
    align-items: flex-start;
`;

export const ProductInfoTitle = styled.h2`
    line-height:2;
    font-size: ${sizes.sizeXXL};
    font-weight: 900;
`;

export const ProductInfo = styled.p`
    font-weight: 300;
    line-height: 1.8;
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



