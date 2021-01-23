import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import { colors, breakpoints } from '../../variables';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const WrapperGallery = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    //border: 1px solid red;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        padding-top: 40px;
        padding-bottom: 40px;  
    }
`;

export const GalleryContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 80px 20px 0px 20px;
    //position: relative;
    //left: 10px;
    //border: 1px solid red;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        padding: 40px 0px 0px 0px;
    }
`;

export const SliderGallery = styled(Slider)`
        //width: 95%;
        .slider-wrapper {
        }
        .slick-slide {
        text-align: center;
    }
`;

export const GalleryImg = styled.img`
    //height: 350px;
    //border: 1px solid red;
    padding: 10px;
    @media only screen and (max-width: ${breakpoints.tablet}) {
        padding: 0px; 
    }
`;

export const NextArrow = styled.img`

    @media only screen and (max-width: ${breakpoints.tablet}) {
        position: absolute;
        right: 25px;
        z-index: 100;
        width: 30px;
        height: 30px;   
        filter: invert(0%) contrast(500%) drop-shadow(0px 0px 14px black);
    }
    @media only screen and (max-width: 651px) {
        right: 15px;
        width: 20px;
        height: 20px;
    }
    :hover{
        filter: invert(50%);
    }
`;

export const PrevArrow = styled.img`

    @media only screen and (max-width: ${breakpoints.tablet}) {
        position: absolute;
        left: 25px;
        z-index: 100;
        width: 30px;
        height: 30px;
        filter: invert(0%) contrast(500%) drop-shadow(0px 0px 14px black);
    }
    @media only screen and (max-width: 651px) {
        left: 15px;
        width: 20px;
        height: 20px;

    }
    :hover{
        filter: invert(50%);
    }
`;







