import styled from 'styled-components';
import { sizes, colors } from '../../variables.js';
import { Name } from '../reusable/styled';
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

`;
export const LeftArrow = styled.img`
    width: 30px;
    height: 30px;
    position: relative;
    left: 37px;
    bottom: 20px;  
`;

export const SliderLector = styled(Slider)`
    width: 100%;

    .slider-wrapper {
    }
    .slick-slide {
    text-align: center;
    }
    .slick-prev {
        left: -5px;
        background-color: green;
    }
    .slick-prev:before{
        color: red;
        left: 15px;
        position: relative;
        left: 38px;
    }
    .slick-next:before {
        display: none;
    }

    .slick-arrow .slick-left {
        color: green;
        position: relative;
        left: 38px;
        border: 1px solid red;
    }
    .prev-slick-arrow{
        background-color: aquamarine;
        width: 50px;
    }

    .slick-left{
        background-color: gold;
        width: 50px;
    }
`;

export const CardsContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 80px 20px;
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
    box-shadow: 0px 0px 10px rgba(68, 68, 68, 0.15);
    margin: 20px;
    outline: none;
`;

export const LectorName = styled(Name)`
    text-align: center;
    font-weight: 900;
    margin-bottom: 10px;
`;

export const LectorJob = styled.p`
    text-align: center;
    font-weight: 400;
    font-size: ${sizes.sizeXS};
    color: ${colors.grey};
    margin: 5px auto;
    width: 85%;
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
`;




