import styled from 'styled-components';
import { sizes, colors } from '../../variables';
import { TitleLeft } from '../reusable/styled';


export const ItemContainer = styled.div`
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    position: relative;
    left: 8px;

`;

export const ItemRow = styled.div`
    display: flex;
    margin-top: 25px;
`;

export const ItemIcon = styled.img`
    width: 22px;
    height: 22px;
    margin-right: 15px;
`;

export const ItemText = styled.div`
    font-size: ${sizes.sizeS};
`;
