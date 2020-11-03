import styled from 'styled-components';

export const TitleContainer = styled.div`
display: flex;
flex-direction:column;
max-width: 50%;
height: 400px;
margin-right: 50px;
justify-content: space-between;
align-items: flex-start;
 `;

 export const Wrapper = styled.div`
 display:flex;
 justify-content: space-between;
 align-items: center;
 `;

 export const ImgContainer = styled.div`
width: 650px;
height: 650px;
border-radius: 325px;
 `;

export const ImgTitle = styled.img`
width: 650px;
height: 650px;
border-radius: 325px;
background-image: url('/images/community/photo_5.jpg');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
 `;

 export const Title = styled.h1`
 font-size: 60px;
 font-weight: 900;
 color: rgba(7, 92, 104, 1);
 `;

export const SubTitle = styled.p`
font-size: 18px;
font-weight: 300;
color: grey;
`;
