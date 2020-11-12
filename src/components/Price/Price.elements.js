import styled from 'styled-components';
import { sizes, colors } from '../../variables';


export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
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
