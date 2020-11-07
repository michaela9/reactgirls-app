import styled from 'styled-components';
import  { sizes, colors } from '../../variables.js';


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

export const ImgTitle = styled.img`
    width: 500px;
    height: 500px;
    border-radius: 300px;
    background-image: url('/images/community/photo_5.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
 `;

 export const Title = styled.h1`
    font-size: ${sizes.sizeXXXL};
    font-weight: 900;
    margin-bottom: 25px;
 `;

export const SubTitle = styled.p`
    font-weight: 300;
    color: ${colors.lightGrey};
    margin-bottom: 25px;
`;
