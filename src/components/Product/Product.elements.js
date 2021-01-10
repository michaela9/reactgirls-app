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
    //border: 1px solid green;
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
    width: 90%;
    //text-align: left;
    //border: 1px solid red;
    margin: 0 auto;
`;

export const ProductInfoRow = styled.div`
    display: flex;
    flex-wrap: wrap;
   // align-items: center;
    justify-content: space-between;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
    padding-top: 80px;
    padding-bottom: 80px;
    //border: 1px solid green;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        justify-content: center;
        align-items: center;
        flex-direction: column-reverse;
        padding-top: 60px;
        padding-bottom: 60px;
    }
`;

export const ProductInfoColumn = styled.div`
    flex: 1;
    max-width: 60%;
    flex-basis: 50%;
    //border: 1px solid yellow;
    display: flex;
    justify-content: center;
    //align-items: center;
    flex-direction: column;
    
    @media only screen and (max-width: ${breakpoints.tablet}) {
        max-width: 90%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
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

   @media only screen and (max-width: ${breakpoints.tablet}) {
    width: 320px;
    height: 320px;
    margin-top: 0px;
    margin-bottom: 40px;
    }
`;



