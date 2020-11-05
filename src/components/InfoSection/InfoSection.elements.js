import styled from 'styled-components';

export const TitleContainer = styled.div`
    display: flex;
    flex-direction:column;
    max-width: 50%;
    margin-right: 50px;
    justify-content: space-between;
    align-items: flex-start;
 `;

 export const Wrapper = styled.div`
    display:flex;

    align-items: center;
    justify-content: space-between;
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
    font-size: 48px;
    font-weight: 900;
    color: rgba(7, 92, 104, 1);
    margin-bottom: 25px;
 `;

export const SubTitle = styled.p`
    font-size: 18px;
    font-weight: 300;
    color: grey;
    margin-bottom: 25px;
`;
