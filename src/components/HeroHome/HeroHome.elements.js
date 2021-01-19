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
    transition: all 1.5s ease-in-out;

    @media only screen and (max-width: 1250px) {
        padding-top: 150px;
        padding-bottom: 40px;
        &.active{
            padding-top: 40px;

        }
    @media only screen and (max-width: 325px) {
        margin-left: 16px;
        margin-right: 16px;
    }
}
`;

export const HeroHomeColumn = styled.div`
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media only screen and (max-width: 1250px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const TextWrapperHome = styled.div`
    max-width: 540px;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        width: 100%;
        margin-right: 16px;
        margin-left: 16px;
    }
`;

export const HeadingHome = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 1250px) {
        align-items: center; 
    }
`;

export const TitleLeftHome = styled(TitleCenter)`
        text-align: left; 
    @media only screen and (max-width: 1250px)  {
        text-align: center;   
    }
`;

export const FirstHomeRow = styled.div`
    display: flex;
   // width: 100%;

   @media only screen and (max-width:325px) {
        flex-direction: column;
        justify-content: center; 
    }
`;

export const AnimationText = styled.div`
    font-weight: 500;
    color: ${colors.mainBlue};
    font-size: ${sizes.sizeXXXL};
    cursor: pointer;
    font-weight: 400;
    height: 100%;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        font-size: ${sizes.sizeXL};
        font-weight: 400;
        //text-align: left;
    }
`;

export const SliderText = styled(Slider)`
    margin-left: 12px;
    width: 225px;
    position: relative;
    top: 2px;
  
    .slick-slide {
        @media only screen and (max-width: ${breakpoints.tablet}) {
            height: 37px;
        }     
    }
    
    @media only screen and (max-width: ${breakpoints.tablet}) {
        width: 140px;
        margin-left: 8px;
        top:2px; 
    }
`;

export const ImgHomeContainer = styled.div`
    border-radius: 50%;
    overflow: hidden;
    outline: none;
    margin-top: 0px;


    @media only screen and (max-width: 319px) { 
        width: 240px;
        height: 240px; 
    }
    @media only screen and (min-width:319px) and (max-width: 370px) { 
        width: 280px;
        height: 280px; 
    }
    @media only screen and (min-width:370px) and (max-width: 420px) { 
        width: 338px; 
        height: 338px;
    }
    @media only screen and (min-width: 420px) and (max-width: 1130px) { 
        width: 380px; 
        height: 380px;
    }

    @media only screen and (min-width: 1130px) { 
        width: 480px; 
        height: 480px;
        margin-top: 20px;
    }
`;

export const HeroHomeImg = styled.img`
    object-fit: cover;
    height: 100%;
 `;

 export const SliderImg = styled(Slider)`
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
    @media only screen and (max-width: 319px) { 
        width: 240px;
    }

    @media only screen and (min-width:319px) and (max-width: 370px) { 
        width: 280px; 
    }
    @media only screen and (min-width:370px) and (max-width: 420px) { 
        width: 338px; 
    }
    @media only screen and (min-width: 420px) and (max-width: 1130px) { 
        width: 380px; 
    }
    @media only screen and (min-width: 1130px) { 
        width: 480px; 
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
    
    @media only screen and (max-width: 1250px) { 
        text-align: center;
    }   
`;

