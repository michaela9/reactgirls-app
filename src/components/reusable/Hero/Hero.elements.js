import styled from 'styled-components';
import  { sizes, colors } from '../../../variables';
import { Paragraph } from '../styled';



export const TitleContainer = styled.div`
    display: flex;
    flex-direction:column;
    max-width: 45%;
    margin-right: 50px;
    justify-content: space-between;
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

