import styled, {css} from "styled-components";
import  { sizes, colors } from '../../variables.js';
import { Link } from 'react-router-dom'

export const Heading1 = styled.h1`
    font-size: ${sizes.sizeXXXL} ;
    line-height: 1.4;
`;

export const Heading2 = styled.h2`
    font-size: ${sizes.sizeXXL};
    line-height: 1.4;
`;

export const Heading3 = styled.h3`
    font-size: ${sizes.sizeM};
    line-height: 1.6;
`;

export const Paragraph = styled.p`
    font-size: ${sizes.sizeM};
    line-height: 1.6;
`;

export const ParagraphS = styled.p`
    font-size: ${sizes.sizeS};
    line-height: 1.7;
`;


export const Container = styled.div`
    z-index:1;
    width: 100%;
    background-color: ${({lightblue}) => (lightblue ? `#EBF6F8`  : `#FFFBFA` )};
`;


export const Wrapper = styled.div`
    width: 1280px;
    display: flex;
    margin: 0 auto;
    padding: 80px 80px;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({imgstart}) => (imgstart ? 'row-reverse' : 'row')};
`;

export const WrapperColumn = styled.div`
    width: 1280px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    padding: 80px 50px;
    align-items: center;
`;


export const TitleCenter = styled(Heading1)`
    text-align: center;
    font-weight: 900;
`; 

export const TitleLeft = styled(Heading1)`
    text-align: left;
    margin-bottom: 25px;
    font-weight: 900;
`;

export const SubTitleLeft = styled(Heading2)`
    text-align: left;
    font-weight: 900;
`;


export const Name = styled(Heading3)`
    text-align: center;
    font-weight: 900;
`;

export default styled;

export const Button = styled(Link)`
    background-color: ${colors.mainBlue};
    border: none;
    white-space: nowrap;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    height: 50px;
    padding: 0 32px;
    border-radius: 25px;
    color: ${colors.white};
    //box-shadow: 0px 4px 2px rgba(68, 68, 68, 0.15);
    letter-spacing: 1px;
    font-weight: 500;
    ${({hidebutton}) => hidebutton && css`
        display: none;
    `};
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: ${colors.darkBlue};
        box-shadow: none;
        //position: relative;
        //top: 2px;
    }
`;