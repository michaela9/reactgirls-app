import styled from 'styled-components';
import { sizes, colors } from '../../../variables';

export const InfoCont = styled.div`
    display: flex;
    width: 1050px;
    height: 900px;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: space-between;
    margin: 80px auto 0 auto;
`;

export const InfoCard = styled.div`
    width: 300px;
    height: 400px;
    padding: 0 30px;
    background-color: ${colors.white};
    border-radius: 30px;
    box-shadow: 0px 0px 40px rgba(68, 68, 68, 0.25), 0px 6px 6px rgba(68, 68, 68, 0.2);
    display: flex;
    flex-direction: column;

`;

export const InfoTitle = styled.div`
    font-size: ${sizes.sizeM} ;
    font-weight: 700;
    text-align: center;
    margin-bottom: 15px;
`;

export const InfoText = styled.div`
    text-align: center;
    font-weight: 300;
    font-size: ${sizes.sizeS};
    line-height: 1.6;
`;
export const InfoIcon = styled.img`
    width: 80px;
    height: 80px;
    margin: 50px auto 30px auto;
`;


