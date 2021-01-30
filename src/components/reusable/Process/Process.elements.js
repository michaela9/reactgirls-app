import styled from 'styled-components';
import { sizes, colors, breakpoints } from '../../../variables';
import { Heading3, ParagraphS } from '../styled';

export const ProcessWrapper = styled.div`
    padding-top: 100px;
    padding-bottom: 100px;
    //border: 1px solid red;
    @media screen and (max-width: ${breakpoints.tablet}) {
        margin-right: 16px;
        margin-left: 16px;
        padding-top: 80px;
        padding-bottom: 80px;

    }
`;

export const ProcessContainer = styled.div`
    width: 100%;
    //border: 1px solid yellow;
    margin-top: 80px;
    @media screen and (max-width: ${breakpoints.tablet}) {
        margin-top: 60px;
    }
`;

export const ProcessRow = styled.div`
    //width: 100%;
    //height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${({reversed}) => (reversed ? `row-reverse`  : `row` )};
    //border: 1px solid red;
    @media screen and (max-width: ${breakpoints.tablet}) {
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        margin-left: 16px;
        margin-right: 16px;
        margin-bottom: 32px;

    }
`;

export const ProcessNumber = styled.div`
    width: 45%;
    font-size: 125px;
    color: ${colors.mainBlue};
    text-align: ${({reversed}) => (reversed ? `left`  : `right` )};
    //border-right: 1px solid ${colors.mainBlue};
    //border: 1px solid red;
    @media screen and (max-width: ${breakpoints.tablet}) {
        text-align: left;
        width: 25%;
        font-size: 100px;
        order: 3;
        text-align: center;
        position: relative;
        top: -4px;


    }
`;

export const ProcessGraphic = styled.div`
   // border: 1px solid blue;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-right: 50px;
    margin-left: 50px;
    @media screen and (max-width: ${breakpoints.tablet}) {
        display: none;
    }
`;

export const ProcessLine = styled.div`
   //background-color: ${colors.veryLightGrey};
   display: ${({last}) => (last ? `none`  : `` )};
   width: 1px;
   border-left: 2px dotted ${colors.veryLightGrey};
   height: 160px;
   position: absolute;
    top: 0px;


   
`;

export const ProcessPoint = styled.h1`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${colors.mainBlue};

    //position: absolute;
    //top: 100px;
    z-index: 100;
    //border: 1px solid red;
`;

export const ProcessCont = styled.div`
    width: 45%;
    //border: 1px solid red;
    padding: 15px;
    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 100%;
        order:4;
        padding: 15px 0 15px 15px;
    }
`;

export const ProcessHeading = styled(Heading3)`
   //border: 1px solid red;
   font-weight: 500;
   text-align: ${({reversed}) => (reversed ? `right`  : `left` )};
   @media screen and (max-width: ${breakpoints.tablet}) {
        text-align: left;
    }
`;

export const ProcessInfo = styled(ParagraphS)`
   //border: 1px solid red;
   font-size: ${sizes.sizeS};
   color: ${colors.grey};
   font-weight: 300;
   text-align: ${({reversed}) => (reversed ? `right`  : `left` )};
   @media screen and (max-width: ${breakpoints.tablet}) {
        text-align: left;
    }
`;