import styled from 'styled-components';
import { sizes, colors } from '../../variables';
import { TitleLeft, Button } from '../reusable/styled';

export const PriceArea = styled.div`
    background-color: ${colors.mainBlue};
    height: 180px;
    border-radius: 30px 30px 0px 0px;
    font-size: 56px;
    color: ${colors.white};
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PriceRectangle = styled.div`
    margin-top: 80px;
    margin-bottom: 40px;
    background: ${colors.white};
    border-radius: 30px; 
    box-shadow: 0px 0px 40px rgba(68, 68, 68, 0.25), 0px 6px 6px rgba(68, 68, 68, 0.2);
`;

export const PriceContainer = styled.div`
    padding: 60px;
`;

export const PriceRow = styled.div`
    display: flex;
    margin-bottom: 25px;
`;

export const PriceIcon = styled.img`
    width: 18px;
    height: 18px;
    margin-right: 15px;
`;

export const PriceText = styled.div`
    font-size: ${sizes.sizeXS};
`;

export const PriceTitle = styled(TitleLeft)`
    width: 40%;
`;

export const PriceIconMain = styled.div`
    width: 70%;
    margin: 0 auto 40px auto;
    padding: 15px;
    text-align: center;
    font-size: ${sizes.sizeXXXL};
    font-weight: 700;
`;

export const ButtonPrice = styled(Button)`
    margin-top: 50px;
`;




