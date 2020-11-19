import styled from 'styled-components';
import { colors, sizes } from '../../variables';

export const ProgramTable = styled.table`
    margin: 0 auto;
    width: 800px;
    border-collapse: collapse; 
    border: none;

`;

export const ProgramTableHead = styled.thead`
 
`;

export const ProgramTableRow = styled.tr`
    border-bottom: 2px solid ${colors.lightGrey};

`;

export const ProgramTableRowH = styled.tr`
    border-bottom: 2px solid ${colors.lightGrey} ;

`;

export const ProgramDataHead = styled.th`
    font-weight: 900;
    padding: 20px;
    text-align: left;
`;

export const ProgramTableBody = styled.tbody`

`;

export const ProgramData = styled.td`
    padding: 20px;
    text-align: left;
`;

export const ProgramDataTopic = styled.td`
    color: ${colors.mainBlue};
    padding: 20px;
    text-align: left;
    font-weight: 500;
`;
