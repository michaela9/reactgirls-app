import styled from 'styled-components';
import { sizes, colors } from '../../../variables';
import { Heading3, ParagraphS } from '../styled';

export const ProcessWrapper = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;
    //border: 1px solid red;
`;

export const ProcessContainer = styled.div`
    width: 100%;
    //border: 1px solid yellow;
    margin-top: 80px;
`;

export const ProcessRow = styled.div`
    width: 100%;
    //height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${({reversed}) => (reversed ? `row-reverse`  : `row` )};
    //border: 1px solid red;
`;

export const ProcessNumber = styled.div`
    width: 45%;
    font-size: 150px;
    color: ${colors.mainBlue};
    text-align: ${({reversed}) => (reversed ? `left`  : `right` )};
    //border-right: 1px solid ${colors.mainBlue};
    //border: 1px solid red;

`;

export const ProcessGraphic = styled.div`
    //border: 1px solid blue;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
`;

export const ProcessLine = styled.div`
   background-color: ${colors.mainBlue};
   width: 3px;
   //border: 1px solid red;
   height: 200px;
   position: relative;
   
`;

export const ProcessPoint = styled.h1`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${colors.mainBlue};
    margin-right: 25px;
    margin-left: 25px;
    position: relative;
    top: 100px;
    //border: 1px solid red;

`;

export const ProcessCont = styled.div`
    width: 45%;
    //border: 1px solid red;
    padding: 15px;
`;

export const ProcessHeading = styled(Heading3)`
   // border: 1px solid red;
   font-weight: 500;
   text-align: ${({reversed}) => (reversed ? `right`  : `left` )};


`;

export const ProcessInfo = styled(ParagraphS)`
   // border: 1px solid red;
   font-size: ${sizes.sizeS};
   color: ${colors.grey};
   font-weight: 300;
   text-align: ${({reversed}) => (reversed ? `right`  : `left` )};

`;