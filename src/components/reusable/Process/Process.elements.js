import styled from 'styled-components';
import { sizes, colors, breakpoints } from '../../../variables';
import { Heading3, ParagraphS } from '../styled';

export const ProcessWrapper = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;
`;

export const ProcessContainer = styled.div`
    width: 100%;
    margin-top: 80px;
    //align-items: flex-start;
`;

export const ProcessRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: ${({reversed}) => (reversed ? `row-reverse`  : `row` )};
    //border: 1px solid red;

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

    @media screen and (max-width: ${breakpoints.tablet}) {
        text-align: ${({reversed}) => (reversed ? `left`  : `left` )};
    }
`;

export const ProcessGraphic = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    @media screen and (max-width: ${breakpoints.tablet}) {
       
    }
`;

export const ProcessLine = styled.div`
    background-color: ${colors.veryLightGrey} ;
    width: 1px;
    height: 130px;
    display: ${({last}) => (last ? `none`  : `block` )};
    @media screen and (max-width: ${breakpoints.tablet}) {
        height: 200px;
        width: 3px;
    }
`;

export const ProcessLineMobile = styled.div`
    display: none; 

    @media screen and (max-width: ${breakpoints.tablet}) {
        display: ${({first}) => (first ? `none`  : `block` )};
        background-color: ${colors.mainBlue} ;
        width: 5px;
        height: 150px;
    } 
`;

export const ProcessPoint = styled.h1`
    width: 90px;
    height: 120px;
    //border-radius: 50%;
    //border: 3px solid ${colors.mainBlue};
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 120px;
    font-weight: 300;
    color: ${colors.mainBlue};
    //border: 1px solid red;
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
    //padding: 15px;
    //border: 1px solid red;

    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 65%;
    }
`;

export const ProcessContOpp = styled.div`
    width: 45%;
    padding: 15px;

    @media screen and (max-width: ${breakpoints.tablet}) {
        display: none;
    }
`;

export const ProcessHeading = styled(Heading3)`
   font-weight: 500;
   text-align: ${({reversed}) => (reversed ? `right`  : `left` )};

   @media screen and (max-width: ${breakpoints.tablet}) {
        text-align: ${({reversed}) => (reversed ? `left`  : `left` )};
    }


`;

export const ProcessInfo = styled(ParagraphS)`
   font-size: ${sizes.sizeS};
   color: ${colors.grey};
   font-weight: 300;
   text-align: ${({reversed}) => (reversed ? `right`  : `left` )};

   @media screen and (max-width: ${breakpoints.tablet}) {
    text-align: ${({reversed}) => (reversed ? `left`  : `left` )};
    }

`;