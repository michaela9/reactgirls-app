import styled from 'styled-components';
import { sizes, colors, breakpoints } from '../../variables.js';
import { Name } from '../reusable/styled';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const WrapperLector = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;
    @media only screen and (max-width: ${breakpoints.tablet}) {
        padding-top: 40px;
        padding-bottom: 40px;
    }
`;

export const SliderLector = styled(Slider)`
    //width: 100%;
    .slider-wrapper {
    }
    .slick-slide {
    text-align: center;
    }
`;

export const CardsContainer = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 80px 20px;

    @media only screen and (max-width: 1280px) {
        padding: 60px 40px;
        max-width: 960px;
    }
    @media only screen and (max-width: 1200px) {
        padding: 60px 40px;
        max-width: 950px;
    }
    @media only screen and (max-width: 1130px) {
        padding: 60px 40px;
        max-width: 680px;
    }
    @media only screen and (max-width: 700px) {
        padding: 60px 20px;
        max-width: 350px;
    }
    @media only screen and (max-width: 420px) {
        padding: 60px 10px;
        max-width: 300px;
    }
    @media only screen and (max-width: 380px) {
        padding: 60px 10px;
        max-width: 260px;
    }
    @media only screen and (max-width: 320px) {
        padding: 60px 10px;
        max-width: 220px;
    }
`;

export const Card = styled.div`
    height: 400px;
    width: 290px;
    max-width: 290px;
    width: 290px;
    display: flex;
    border-radius: 30px;
    background-color: ${colors.white} ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 25px;
    box-shadow: 0px 0px 10px rgba(68, 68, 68, 0.15);
    margin: 20px;
    outline: none;
    @media only screen and (max-width: 1280px) {
        height: 400px;
        width: 260px;
        max-width: 260px;
        width: 260px;
        padding: 25px 25px;
    }
    @media only screen and (max-width: 700px) {
        width: 220px;
        padding: 25px 5px;
        box-shadow: none;
        height: 350px;
    }
    @media only screen and (max-width: 380px) {
        padding: 0px 0px;
        margin: 0px;
        width: 200px;
        height: 300px;
    }
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
    @media only screen and (max-width: ${breakpoints.tablet}) {
        width: 100%;
    }
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

export const Arrow = styled.img`
    :hover{
        filter: invert(20%);
    }
`;




