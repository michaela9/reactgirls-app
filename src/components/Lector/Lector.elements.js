import styled from 'styled-components';
import { sizes, colors } from '../../variables.js';
import { Paragraph, Name } from '../reusable/styled';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const WrapperLector = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;
`;
export const RightArrow = styled.img`
    width: 30px;
    height: 30px;
    position: relative;
    right: 47px;
    bottom: 20px;
    border: 1px solid red;

`;
export const LeftArrow = styled.img`
    width: 30px;
    height: 30px;
    position: relative;
    left: 0px;
    bottom: 20px;
    border: 1px solid red;   
`;


export const SliderLector = styled(Slider)`
    width: 100%;
    margin: 0 auto;
    border: 1px solid red;

    .slider-wrapper {
    margin: auto;
    }
    .slick-slide {
    text-align: center;
    position: relative;
    }
    .slick-prev {
    left: 25px !important;
}
        .slick-next:before {
        content: "";
        //color: red;
        width: 50px;
        //font-weight: bold;
        //background-image: url("/images/icons/right-arrow.svg");
        right: -50px;
        }
        .slick-prev:before{
        content: "<";
        background-color: red;
        width: 50px;
        left: 25px;
        //background-image: url("/images/icons/left-arrow.svg");
        }
        .thumbnail-slider-wrap {
        margin-top: 15px;
        height: 85px;
        }
        .thumbnail-slider-wrap .slick-track .slick-slide {
        text-align: center;
        }
        .thumbnail-slider-wrap .slick-track .slick-slide img {
        width: 70%;
        }

`;

export const CardsContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 80px 20px;
    //border: 1px solid blue;
`;

export const Card = styled.div`
    height: 400px;
    min-width: 300px;
    max-width: 300px;
    display: flex;
    border-radius: 30px;
    background-color: ${colors.white} ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 35px;
    //box-shadow: 0px 0px 20px rgba(68, 68, 68, 0.15), 0px 6px 6px rgba(68, 68, 68, 0.1);
    box-shadow: 0px 0px 10px rgba(68, 68, 68, 0.15);
    margin: 20px;
    outline: none;
`;

export const LectorName = styled(Name)`
    text-align: center;
    font-weight: 900;
    margin-bottom: 10px;
    //border: 1px solid red;
`;

export const LectorJob = styled.p`
    text-align: center;
    font-weight: 400;
    font-size: ${sizes.sizeXS};
    color: ${colors.grey};
    margin: 5px auto;
    width: 85%;
    //border: 1px solid red;
`;

export const LectorLink = styled.a`
    position: absolute;
    bottom: 0;
    right: 0;
    border: 4px solid white;
    width: 50px;
    height: 50px;
    background-color: ${colors.mainBlue};
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LectorImg = styled.img`
    height: 150px;
    border-radius: 80px;
    //border: 1px solid green;
    `;

export const LectorImgContainer = styled.div`
   width: 150px;
   height: 150px;
    margin: 20px auto 40px auto;
   position: relative;
`

export const IconIn = styled.img`
    width: 18px;
    height: 18px;
    //border: 1px solid red;
`;




