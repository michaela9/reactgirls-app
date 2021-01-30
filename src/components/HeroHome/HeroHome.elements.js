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
    padding-top: 100px;
    padding-bottom: 100px;
    transition: all 1.5s ease-in-out;
    //border: 1px solid red;

    @media only screen and (max-width: 1250px) {
        padding-top: 120px;
        padding-bottom: 80px;
        &.active{
            padding-top: 80px;
            padding-bottom: 80px;

        }
    @media only screen and (max-width: 325px) {
        margin-left: 16px;
        margin-right: 16px;
        padding-bottom: 40px;
    }
}
`;

export const HeroHomeColumn = styled.div`
    //border: 1px solid red;
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
    //border: 1px solid red;
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
    //border: 1px solid red;

    @media only screen and (max-width: 1250px) {
        align-items: center; 
    }
`;

export const TitleLeftHome = styled(TitleCenter)`
//border: 1px solid red;
        text-align: left; 
        font-size: ${sizes.sizeXXXL};
        font-weight: 500;
    @media only screen and (max-width: 1250px)  {
        text-align: center; 
        font-size: ${sizes.sizeXL};
        font-weight: 500;  
    }
    @media only screen and (max-width: 330px) {
        font-size: 22px;
        font-weight: 700;
    }
`;

export const FirstHomeRow = styled.div`
    display: flex;
   // width: 100%;
   //border: 1px solid red;

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

    :hover{
        filter: saturate(50%) contrast(75%);
    }

    @media only screen and (max-width: 1250px) {
        font-size: ${sizes.sizeXL};
        font-weight: 500;
        //text-align: left;
    }
    @media only screen and (max-width: 330px) {
        font-size: 22px;
        font-weight: 700;
        text-align: center;
    }
`;

export const SliderText = styled(Slider)`
    margin-left: 12px;
    width: 225px;
    position: relative;
    top: 2px;
    //border: 1px solid red;
  
    .slick-slide {
        @media only screen and (max-width: ${breakpoints.tablet}) {
            //height: 37px;
        } 
        @media only screen and (max-width: 330px) {
            //height: 28px;
        } 
    }
    
    @media only screen and (max-width: 1250px) {
        width: 140px;
        //margin-left: 8px;
        top: 2px; 
        margin: 0 auto 0 8px;
    }
    @media only screen and (max-width: 330px) {
        //margin-left: 12px;
        //height: 28px;
        width: 150px;
        position: relative;
        top: 2px;
        margin: 0 auto;
    }    
`;

export const ImgHomeContainer = styled.div`
    border-radius: 50%;
    overflow: hidden;
    outline: none;
    margin-top: 40px;


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
        margin-top: 0px;
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
        margin-top: 40px; 
        margin-bottom: 40px; 
    }   
`;

