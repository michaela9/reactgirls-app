import styled from 'styled-components';
import  { colors } from '../../../variables';
import { Paragraph } from '../styled';

export const HeroWrapper = styled.div`
    display: flex;
    padding: 80px 0 80px 0;
    justify-content: space-between;
    flex-wrap: wrap;
 `;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction:column;
    max-width: 45%;
    margin-right: 50px;
    justify-content: center;
    align-items: flex-start;
 `;

 export const ImgContainer = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 250px;
    overflow: hidden;
 `;

export const HeroImg = styled.img`
    height: 500px;
    width: auto;
 `;


export const SubTitle = styled(Paragraph)`
    font-weight: 300;
    color: ${colors.grey};
    margin-bottom: 25px;
`;

