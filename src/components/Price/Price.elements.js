import styled from 'styled-components';
import { sizes, colors } from '../../variables';
import { TitleLeft } from '../reusable/styled';


export const PriceContainer = styled.div`
    display: flex;
    padding: 50px;
    flex-direction: column;
    margin-top: 80px;
    background: ${colors.white};
    border-radius: 30px;
    box-shadow: 0px 0px 40px rgba(68, 68, 68, 0.25), 0px 6px 6px rgba(68, 68, 68, 0.2);
`;

export const PriceRow = styled.div`
    display: flex;
    margin-bottom: 25px;
`;

export const PriceIcon = styled.img`
    width: 22px;
    height: 22px;
    margin-right: 30px;
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
