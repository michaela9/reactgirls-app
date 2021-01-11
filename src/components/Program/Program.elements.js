import styled from 'styled-components';
import { colors, breakpoints, sizes } from '../../variables';

export const ProgramWrapper = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;
    border-top: 3px solid ${colors.lightBlue};

    @media screen and (max-width: ${breakpoints.tablet}) {
        padding-top: 60px;
        padding-bottom: 40px;
    }
`;

export const ProgramTable = styled.table`
    margin: 80px auto 0 auto;
    max-width: 800px;
    width: 100%;
    border-collapse: collapse; 
    border: none;

    @media screen and (max-width: ${breakpoints.tablet}) {
        margin: 40px auto 0 auto;

`;

export const ProgramTableHead = styled.thead`

@media screen and (max-width: ${breakpoints.tablet}) {
        display: none;   
    }
`;

export const ProgramTableRow = styled.tr`
    border-bottom: 1px solid #EBEBEB;

    @media screen and (max-width: ${breakpoints.tablet}) {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 10px; 
        //border-bottom: none;
       border-bottom: ${({border}) => (border ? `1px solid #EBEBEB`  : `none` )};

    }
`;

export const ProgramTableRowH = styled.tr`
    border-bottom: 1px solid #DEDCDC;
`;

export const ProgramDataHead = styled.td`
    padding: 20px;
    text-align: left;
    color: ${colors.darkGrey};
    font-weight: 300;
`;

export const ProgramTableBody = styled.tbody`
`;

export const ProgramData = styled.td`
    padding: 20px;
    text-align: left;
    color: ${colors.darkGrey};
    font-weight: 300;

    @media screen and (max-width: ${breakpoints.tablet}) {
        padding: 7px;
        font-size: ${sizes.sizeS};
        text-align: center;
    }
`;

export const ProgramDataTopic = styled.td`
    padding: 20px;
    text-align: left;
    font-weight: 700;

    @media screen and (max-width: ${breakpoints.tablet}) {
        padding: 7px; 
        text-align: center;
    }
`;
