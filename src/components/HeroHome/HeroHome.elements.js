import styled from 'styled-components';
import  { sizes, colors } from '../../variables';
import { Heading1, Paragraph } from '../reusable/styled';
import Carousel from 'react-elastic-carousel';

export const TitleHomeContainer = styled.div`
    display: flex;
    flex-direction:column;
    margin-right: 50px;
    justify-content: space-between;
    align-items: flex-start;
    width: 900px;
 `;

export const TitleCont = styled.div`
    width: 100%;
`;

 export const ImgHomeContainer = styled.div`
    height: 480px;
    width: 480px;
    border-radius: 240px;
    overflow: hidden;
    outline: none;
 `;

export const HeroHomeImg = styled.img`
    height: 480px;
    cursor: pointer;
 `;

export const FirstTitleRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
`;

export const TitleLeftHome = styled(Heading1)`
    text-align: left;
    font-weight: 500;
    width: 100%;
`;

export const AnimationText = styled.strong`
    margin: 0;
    padding: 0;
    font-weight: 500;
    color: ${colors.mainBlue};
    font-size: ${sizes.sizeXXXL};
`;

export const CarouselText = styled(Carousel)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 0;
    padding: 0;
    position: relative;
    right: 20px;
`;

export const CarouselHero = styled(Carousel)`
    position: relative;
    left: 30px;

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