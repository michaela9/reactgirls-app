import styled from 'styled-components';
import  { sizes, colors, breakpoints } from '../../variables';
import { Heading1, Paragraph } from '../reusable/styled';
import Carousel from 'react-elastic-carousel';

export const TitleHomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid green;
    max-width: 400px;

 `;

export const TitleCont = styled.div`
    width: 100%;
`;

 export const ImgHomeContainer = styled.div`
    height: 360px;
    width: 360px;
    border-radius: 50%;
    overflow: hidden;
    outline: none;
 `;

export const HeroHomeImg = styled.img`
    cursor: pointer;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
 `;

export const FirstTitleRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
`;

export const TitleLeftHome = styled(Heading1)`
    text-align: center;
    font-weight: 500;
    width: 100%;

    @media only screen and (max-width: ${breakpoints.smartphone}) {
        max-width: 360px;
        font-size: ${sizes.sizeXL};
    }
    @media only screen and (min-width: ${breakpoints.smartphone}) and (max-width: ${breakpoints.tablet}) {
        max-width: 360px; 
        font-size: ${sizes.sizeXL};
    }
    @media only screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        font-size: ${sizes.sizeXXXL};
    }
    @media only screen and (min-width: ${breakpoints.desktop})  {
        font-size: ${sizes.sizeXXXL};
    }
`;

export const AnimationText = styled.strong`
    margin: 0;
    padding: 0;
    font-weight: 500;
    color: ${colors.mainBlue};


    @media only screen and (max-width: ${breakpoints.smartphone}) {
        font-size: ${sizes.sizeXL};
    }
    @media only screen and (min-width: ${breakpoints.smartphone}) and (max-width: ${breakpoints.tablet}) {
        font-size: ${sizes.sizeXL};
    }
    @media only screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        font-size: ${sizes.sizeXXXL};
    }
    @media only screen and (min-width: ${breakpoints.desktop})  {
        font-size: ${sizes.sizeXXXL};
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
    max-width: 46%;


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

export const SubTitle = styled(Paragraph)`
    font-weight: 300;
    color: ${colors.grey};
    margin-bottom: 25px;
    margin-top: 15px;
`;