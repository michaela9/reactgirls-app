import styled from 'styled-components';
import { sizes, colors, breakpoints } from '../../../variables';

export const InfoCont = styled.div`
    display: flex;
    width: 90%;
    max-width: 1000px;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: space-between;
    margin: 80px auto 0 auto;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        padding-bottom: 40px;
        align-items: center;
        margin: 60px auto 0 auto;
        
    }
`;

export const WrapperInfoSection = styled.div`
    padding-top: 80px;
    padding-bottom: 40px;
    @media screen and (max-width: ${breakpoints.tablet}) {
        padding-top: 60px;
        padding-bottom: 0;
    }
`;


export const InfoCard = styled.div`
    width: 300px;
    height: 400px;
    padding: 0 30px;
    background-color: ${colors.white};
    border-radius: 30px;
    box-shadow: 0px 0px 30px rgba(68, 68, 68, 0.1), 0px 0px 4px rgba(68, 68, 68, 0.1);
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    
    @media screen and (max-width: ${breakpoints.tablet}) {
        padding: 0 10px;
        width: 280px;
        height: 380px;
    }
`;

export const InfoTitle = styled.div`
    font-size: ${sizes.sizeM} ;
    font-weight: 700;
    text-align: center;
    margin-bottom: 15px;
`;

export const InfoText = styled.div`
    width: 80%;
    text-align: center;
    font-weight: 300;
    font-size: ${sizes.sizeS};
    line-height: 1.6;
    margin: 0 auto;
`;

export const InfoIcon = styled.img`
    width: 80px;
    height: 80px;
    margin: 60px auto 40px auto;
`;


