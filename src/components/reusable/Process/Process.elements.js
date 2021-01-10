import styled from 'styled-components';
import { sizes, colors, breakpoints } from '../../../variables';
import { Heading3, ParagraphS } from '../styled';

export const ProcessWrapper = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;
   // border: 1px solid red;
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
    justify-content: flex-end;
    //align-items: center;
    flex-direction: ${({reversed}) => (reversed ? `row-reverse`  : `row` )};
    //flex-direction: row;
   // border: 1px solid red;

    @media screen and (max-width: ${breakpoints.tablet}) {
        flex-direction: ${({reversed}) => (reversed ? `row`  : `row` )};
        justify-content: space-around;
    }
`;

export const ProcessNumber = styled.div`
    width: 40%;
    font-size: 150px;
    color: ${colors.mainBlue};
    text-align: ${({reversed}) => (reversed ? `left`  : `right` )};
    border-right: 1px solid ${colors.mainBlue};
    //border: 1px solid red;
    @media screen and (max-width: ${breakpoints.tablet}) {
        text-align: ${({reversed}) => (reversed ? `left`  : `left` )};
    }

`;

export const ProcessGraphic = styled.div`
    //border: 1px solid blue;
    width: 20%;
    //height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    //position: relative;
    //padding-top: 30px;
    //padding-bottom: 30px;
    @media screen and (max-width: ${breakpoints.tablet}) {
        //justify-content: center;
    }
`;

export const ProcessLine = styled.div`
   background-color: ${colors.mainBlue} ;
   width: 5px;
   //border: 1px solid red;
   height: 150px;
   //position: relative;
   display: ${({last}) => (last ? `none`  : `block` )};
   @media screen and (max-width: ${breakpoints.tablet}) {
    height: 200px;
    width: 3px;
   //
    }
   
`;

export const ProcessLineMobile = styled.div`
    display: none  ; 
    @media screen and (max-width: ${breakpoints.tablet}) {
        display: ${({first}) => (first ? `none`  : `block` )};
        background-color: ${colors.mainBlue} ;
        width: 5px;
        //border: 1px solid red;
        height: 150px;
        //position: relative;
        } 
`;

export const ProcessPoint = styled.h1`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    //background-color: ${colors.mwh};
    border: 5px solid ${colors.mainBlue};
    //margin-right: 25px;
    //margin-left: 25px;
    //position: absolute;
    //top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 80px;
    font-weight: 300;
    color: ${colors.mainBlue};
    //border: 1px solid red;

    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 80px;
        height: 80px;
        font-size: 50px;
        border: 3px solid ${colors.mainBlue};
    }

`;

export const ProcessCont = styled.div`
    width: 45%;
    //border: 1px solid red;
    padding: 15px;

    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 65%;

    }

`;


export const ProcessContOpp = styled.div`
    width: 45%;
    //border: 1px solid yellow;
    padding: 15px;
    @media screen and (max-width: ${breakpoints.tablet}) {
        display: none;
    }
`;

export const ProcessHeading = styled(Heading3)`
    //border: 1px solid red;
   font-weight: 500;
   text-align: ${({reversed}) => (reversed ? `right`  : `left` )};

   @media screen and (max-width: ${breakpoints.tablet}) {
    text-align: ${({reversed}) => (reversed ? `left`  : `left` )};
    }


`;

export const ProcessInfo = styled(ParagraphS)`
   //border: 1px solid red;
   font-size: ${sizes.sizeS};
   color: ${colors.grey};
   font-weight: 300;
   text-align: ${({reversed}) => (reversed ? `right`  : `left` )};

   @media screen and (max-width: ${breakpoints.tablet}) {
    text-align: ${({reversed}) => (reversed ? `left`  : `left` )};
    }

`;