import styled from 'styled-components';
import { breakpoints } from '../../variables';
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

    @media only screen and (max-width: ${breakpoints.tablet}) {
        padding-top: 60px;
        padding-bottom: 60px;  
    }
`;

export const GalleryContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 80px 20px 0px 20px;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        padding: 60px 0px 0px 0px;
    }
`;

export const SliderGallery = styled(Slider)`
        .slider-wrapper {
        }
        .slick-slide {
        text-align: center;
    }
`;

export const GalleryImg = styled.img`
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
        filter: invert(0%) contrast(1000%) drop-shadow(0px 0px 14px black);

        :hover{
            filter: invert(0%);
        }
    }
    
    :hover{
        filter: invert(50%);
    }
`;







