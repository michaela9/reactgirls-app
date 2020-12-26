import styled from 'styled-components';
import { colors, sizes, breakpoints } from '../../variables.js';
import { Paragraph } from '../reusable/styled';

export const ProductInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    @media only screen and (max-width: ${breakpoints.smartphone}) {
        padding: 40px;

    }
    @media only screen and (min-width: ${breakpoints.smartphone}) and (max-width: ${breakpoints.tablet}) {
        padding: 40px; 
    }
    @media only screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        max-width: 50%;
    }
    @media only screen and (min-width: ${breakpoints.desktop})  {
        max-width: 50%;
    }
`;

export const ProductInfo = styled(Paragraph)`
    font-weight: 300;
    line-height: 1.8;
    margin-bottom: 32px;
    margin-top: 32px;
    color: ${colors.grey};
    text-align: center;
    max-width: 380px;
    a{
        color: ${colors.mainBlue};
        font-weight: 500;
        cursor: pointer;
        text-decoration: none;

    }
`;

export const ProductImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ProductImgContainer = styled.div`
   border-radius: 50%;
   overflow: hidden;
   margin-top: 40px;
   margin-bottom: 20px;
   width: 380px;
   height: 380px;
`;



