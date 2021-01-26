import styled from 'styled-components';
import  { sizes, colors, breakpoints } from '../../variables';
import { Heading1, Paragraph, Wrapper } from '../reusable/styled';
import Carousel from 'react-elastic-carousel';

export const HeroHomeRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding-top: 80px;
    padding-bottom: 80px;
    border: 1px solid yellow;
`;

export const HeroHomeColumn = styled.div`
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;
    border: 1px solid pink;

    @media only screen and (max-width: 982px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const TextWrapperHome = styled.div`
    max-width: 540px;

@media only screen and (max-width: ${breakpoints.tablet}) {
    }
`;

export const HeadingHome = styled.div`
 border: 1px solid red;
 margin: 0 auto;
`;

export const TitleLeftHome = styled(Heading1)`
 border: 1px solid red;
 display: inline-block;
 font-weight: 400;
 
@media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: ${sizes.sizeXXL};
 }
`;

export const FirstHomeRow = styled.div`
    display: flex
`;


export const AnimationText = styled.div`
    margin: 0;
    padding: 0;
    font-weight: 500;
    color: ${colors.mainBlue};
    border: 1px solid red;
    font-size: ${sizes.sizeXXXL};
    cursor: pointer;
        font-weight: 400;
    @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: ${sizes.sizeXXL};


 }
`;

export const CarouselText = styled(Carousel)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 0;
    padding: 0;
    position: relative;
    right: 5px;
    max-width: 45%;
    border: 1px solid red;
`;

export const CarouselHero = styled(Carousel)`
    .rec.rec-dot {
        outline: none;
        background-color: ${colors.veryLightGrey};
        box-shadow: none;
        width: 10px;
        height: 10px;
        margin-top: 20px;
    }
    .rec.rec-dot_active {
        background: ${colors.mainBlue};
        outline: none;
        box-shadow: none;
    }
`;

export const ImgHomeContainer = styled.div`
    border-radius: 50%;
    overflow: hidden;
    outline: none;
    border: 1px solid red;
    height: 480px;
    width: 480px;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        height: 360px;
        width: 360px; 
    }
`;

export const HeroHomeImg = styled.img`
    height: 100%;
    object-fit: cover;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
 `;


export const SubTitle = styled(Paragraph)`
    font-weight: 300;
    color: ${colors.grey};
    margin-bottom: 25px;
    margin-top: 15px;
    border: 1px solid red;
`;