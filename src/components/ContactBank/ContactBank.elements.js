import styled from 'styled-components';
import  { sizes, colors } from '../../variables.js';


export const ContentContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 0 80px;
 `;

export const BankContainer = styled.div`
    display: flex;
    flex-direction: column;
 `;

export const BankIcon = styled.img`
    width: 50px;
    height: 50px;
    margin-bottom: 25px;
 `;

export const BankHeading = styled.h3`
    margin-bottom: 15px;
 `;

export const BankText = styled.p`
    font-size: ${sizes.sizeXS};
    line-height: 1.8;
 `;
