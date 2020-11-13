import styled from 'styled-components';
import { sizes, colors } from '../../variables';
import { TitleLeft } from '../reusable/styled';


export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    position: relative;
    left: -25px;
`;

export const PriceRow = styled.div`
    display: flex;
    margin-bottom: 25px;
`;

export const PriceIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 15px;
`;

export const PriceText = styled.div`
    font-size: ${sizes.sizeS};
`;

export const PriceTitle = styled(TitleLeft)`
width: 40%;
`
