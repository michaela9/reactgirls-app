import styled from 'styled-components';
import { colors, breakpoints, sizes } from '../../variables';

export const ProgramWrapper = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;
    border-top: 2px solid #EBEBEB;
    @media screen and (max-width: ${breakpoints.tablet}) {
        padding-top: 60px;
        padding-bottom: 60px;
    }
`;

export const ProgramDataRow= styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProgramTable = styled.table`
    margin: 80px auto 0 auto;
    max-width: 960px;
    width: 100%;
    border-collapse: collapse; 
    border: none;
    @media screen and (max-width:480px) {
        margin: 40px auto 0 auto;  
    }
    @media screen and (min-width: 480px) and (max-width: 680px) {
        width: 80%;
    }
    @media screen and (min-width: 680px) and (max-width: ${breakpoints.tablet}) {
        width: 60%;
    }
`;

export const ProgramTableHead = styled.thead`

    @media screen and (max-width: ${breakpoints.tablet}) {
        display: none;   
    }
`;

export const ProgramTableRow = styled.tr`
    border-bottom: 1px solid #EBEBEB;

    @media screen and (max-width: ${breakpoints.tablet} ) {
        display: flex;
        flex-direction: column;
        border-bottom: ${({border}) => (border ? `1px solid #EBEBEB`  : `none` )};
        padding: 20px;
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
        padding: 10px;
        font-size: ${sizes.sizeS};
    }
`;

export const ProgramDataTopic = styled.td`
    padding: 20px;
    text-align: left;
    font-weight: 700;
    font-size: ${sizes.sizeS};
    @media screen and (max-width: ${breakpoints.tablet}) {
        padding: 10px;
    }
`;
