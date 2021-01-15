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
        padding: 40px 20px 0px 20px;
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
`;






