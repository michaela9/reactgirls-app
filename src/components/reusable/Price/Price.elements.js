import styled from 'styled-components';
import { sizes, colors } from '../../../variables';
import { TitleLeft, Button } from '../styled';

export const PriceWrapper = styled.div`
    padding-top: 80px;
    padding-bottom: 60px;
`;

export const PriceArea = styled.div`
    border-bottom: 2px solid ${colors.mainBlue};
    border-radius: 30px 30px 0px 0px;
    font-size: ${sizes.sizeXXXL} ;
    color: ${colors.darkGrey};
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
    padding-bottom: 40px;
    padding-top: 40px;
`;

export const PriceRectangle = styled.div`
    width: 380px;
    margin: 80px auto 40px auto;
    background: ${colors.white};
    border-radius: 30px; 
    box-shadow: 0px 0px 20px rgba(68, 68, 68, 0.10), 0px 0px 4px rgba(68, 68, 68, 0.1);
`;

export const PriceContainer = styled.div`
    padding: 10px 40px 50px 40px;
`;

export const PriceRow = styled.div`
    display: flex;
    margin-bottom: 28px;
`;

export const PriceIcon = styled.img`
    width: 18px;
    height: 18px;
    margin-right: 10px;
`;

export const PriceText = styled.div`
    font-size: ${sizes.sizeXS};
    color: ${colors.grey};

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
    margin-top: 45px;
`;
