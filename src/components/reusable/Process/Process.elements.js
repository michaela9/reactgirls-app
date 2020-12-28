import styled from 'styled-components';
import { sizes, colors } from '../../../variables';
import { Heading3, ParagraphS } from '../styled';

export const ProcessContainer = styled.div`
    width: 100%;
        border: 1px solid red;


`;

export const ProcessRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
        border: 1px solid red;
`;

export const ProcessNumber = styled.div`
    width: 45%;
    font-size: 150px;
    color: ${colors.mainBlue};
    text-align: right;
    //border-right: 1px solid ${colors.mainBlue};
    border: 1px solid red;
`;

export const ProcessGraphic = styled.div`
    height: 50px;
    border: 1px solid blue;
`;

export const ProcessLine = styled.div`

   color: ${colors.mainBlue};
   width: 5px;
   border: 1px solid red;
`;

export const ProcessPoint = styled.h1`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${colors.mainBlue};
    margin-right: 25px;
    margin-left: 25px;
        border: 1px solid red;

`;

export const ProcessCont = styled.div`
    width: 45%;
    border: 1px solid red;
`;

export const ProcessHeading = styled(Heading3)`
    border: 1px solid red;
`;

export const ProcessInfo = styled(ParagraphS)`
    border: 1px solid red;
`;