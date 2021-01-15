import styled from 'styled-components';
import  { sizes, colors, breakpoints } from '../../variables';
import { TitleCenter, Subtitle } from '../reusable/styled';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const HeroHomeRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding-top: 80px;
    padding-bottom: 80px;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        padding-top: 40px;
        padding-bottom: 20px;
    }
`;

export const HeroHomeColumn = styled.div`
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;


    @media only screen and (max-width: ${breakpoints.tablet}) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const TextWrapperHome = styled.div`
    max-width: 540px;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        margin: 0 auto;
    }
`;

export const HeadingHome = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        align-items: center; 
    }
`;

export const TitleLeftHome = styled(TitleCenter)`
        text-align: left; 
    @media only screen and (max-width: ${breakpoints.tablet}) {
        text-align: center;   
    }
`;

export const FirstHomeRow = styled.div`
    display: flex;
    width: 100%;

   @media only screen and (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
        align-items: center; 
    }
`;

export const AnimationText = styled.div`
    margin: 0;
    padding: 0;
    font-weight: 500;
    color: ${colors.mainBlue};
    font-size: ${sizes.sizeXXXL};
    cursor: pointer;
    font-weight: 400;
    @media only screen and (max-width: ${breakpoints.tablet}) {
        font-size: ${sizes.sizeXL};
        font-weight: 400;
        text-align: center;
        margin-top: -10px;
        padding-top: 3px;
        padding-bottom: 3px;
    }
`;


export const SliderText = styled(Slider)`
    width: 220px;
    height: 100%;
    position: relative;
    top: 2px;
    left: 6px;
`;


export const ImgHomeContainer = styled.div`
    height: 480px;
    width: 480px;
    border-radius: 50%;
    overflow: hidden;
    outline: none;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        height: 320px;
        width: 320px; 
        margin-top: 30px;
    }
`;

export const HeroHomeImg = styled.img`
    object-fit: cover;
    height: 100%;
 `;

 export const SliderImg = styled(Slider)`
    width: 480px;
    margin: 0 auto;
  .slick-dots li {
    width: 10px;
    transition: width 0.3s ease-in-out;
  }

  .slickCustomDots {
    height: 10px;
    width: 10px;
    background-color: ${colors.veryLightGrey};
    border-radius: 50%;
    margin-top: 30px;
  }
  .slick-dots .slick-active .slickCustomDots {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: relative;
    top: 0px;
    background-color: ${colors.mainBlue};
    .loading {   
    }
    }
    @media only screen and (max-width: ${breakpoints.tablet}) { 
        width: 320px; 
    }

    .hideDesktop {
        @media only screen and (min-width: ${breakpoints.tablet}) {
            display: none;
        }
    }
    .hideMobile {
        @media only screen and (max-width: ${breakpoints.tablet}) {
            display: none;
        }
    }
`;

export const SubtitleHero = styled(Subtitle)`
    margin-top: 20px;    
    margin-bottom: 30px;
    
    @media only screen and (max-width: ${breakpoints.tablet}) { 
        text-align: center;
    }   
`;

