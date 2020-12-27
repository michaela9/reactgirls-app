import styled from 'styled-components';
import  { sizes, colors } from '../../variables.js';
import { ParagraphS } from '../reusable/styled';

export const ContentContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 90%;
    padding: 80px 0 30px 0;
    margin-bottom: 40px;

    
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        position: relative;
        left: 40px;  
    }
 `;

export const BankContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 768px) {
        margin-bottom: 60px;
    }
 `;

export const BankIcon = styled.img`
    width: 50px;
    height: 50px;
    margin-bottom: 25px;
 `;

export const BankHeading = styled.h3`
    margin-bottom: 15px;
 `;

export const BankText = styled(ParagraphS)`
    font-size: ${sizes.sizeXS};
    color: ${colors.grey};
    font-weight: 300;
 `;
