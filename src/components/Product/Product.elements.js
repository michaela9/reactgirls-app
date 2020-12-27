import styled from 'styled-components';
import { colors, sizes, breakpoints } from '../../variables.js';
import { Paragraph, TitleCenter, TitleLeft, Button } from '../reusable/styled';


export const ProductInfo = styled(Paragraph)`
    font-weight: 300;
    line-height: 1.8;
    margin-bottom: 32px;
    margin-top: 32px;
    color: ${colors.grey};
    text-align: left;
    width: 90%;
    border: 1px solid green;
    a{
        color: ${colors.mainBlue};
        font-weight: 500;
        cursor: pointer;
        text-decoration: none;
    }
    @media only screen and (max-width: ${breakpoints.tablet}) {
        text-align: center;
    }
`;

export const ProductMainTitle = styled(TitleCenter)`
    padding: 80px;
`;

export const ProductInfoRow = styled.div`
    display: flex;
    flex-wrap: wrap;
   // align-items: center;
    justify-content: space-between;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
    padding-top: 80px;
    padding-bottom: 80px;
    border: 1px solid green;
`;

export const ProductInfoColumn = styled.div`
    flex: 1;
    width: 50%;
    flex-basis: 50%;
    border: 1px solid green;
    display: flex;
    //justify-content: center;
    align-items: center;
    flex-direction: column;
    
    @media only screen and (max-width: ${breakpoints.tablet}) {
        width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const ProductTitle = styled(TitleLeft)`
    margin-bottom: -15px;
`;

export const ProductButton = styled(Button)`
    width: 160px;
`;

export const ProductImg = styled.img`
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
   display: flex;
   justify-content: ${({imgStart}) => (imgStart ? 'flex-start' : 'flex-end')};
`;



