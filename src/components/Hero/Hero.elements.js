import styled from 'styled-components';
import  { sizes, colors } from '../../variables.js';
import { Paragraph } from '../reusable/styled';



export const TitleContainer = styled.div`
    display: flex;
    flex-direction:column;
    max-width: 50%;
    margin-right: 50px;
    justify-content: space-between;
    align-items: flex-start;
 `;


 export const ImgContainer = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 325px;
 `;

export const HeroImg = styled.img`
    width: 500px;
    height: 500px;
    border-radius: 300px;
    background-image: url('/images/community/photo_5.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
 `;

export const SubTitle = styled(Paragraph)`
    font-weight: 300;
    color: ${colors.lightGrey};
    margin-bottom: 25px;
`;

