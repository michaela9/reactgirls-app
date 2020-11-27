import styled from 'styled-components';
import { sizes, colors } from '../../../variables';


export const StudentContainer = styled.div`
    display: flex;
    width: 1000px;
    justify-content: space-between;
    margin-top: 80px;
`;

export const StudentCard = styled.div`
    width: 250px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StudentHeading = styled.h3`
    font-size: ${sizes.sizeM} ;
    font-weight: 700;
    text-align: center;
    margin-bottom: 15px;
`;

export const StudentText = styled.p`
    text-align: center;
    font-weight: 300;
    font-size: ${sizes.sizeS};
    line-height: 1.6;
`;

export const StudentIcon = styled.img`
    width: 80px;
    height: 80px;
    margin: 50px auto 30px auto;
`;
