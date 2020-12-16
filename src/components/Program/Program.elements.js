import styled from 'styled-components';
import { colors } from '../../variables';

export const ProgramTable = styled.table`
    margin: 0 auto;
    width: 800px;
    border-collapse: collapse; 
    border: none;
`;

export const ProgramTableHead = styled.thead`
`;

export const ProgramTableRow = styled.tr`
    border-bottom: 1px solid #EBEBEB;
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
`;

export const ProgramDataTopic = styled.td`
    padding: 20px;
    text-align: left;
    font-weight: 700;
`;
