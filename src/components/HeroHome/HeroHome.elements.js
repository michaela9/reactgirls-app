import styled from 'styled-components';
import  { sizes, colors } from '../../variables';
import { Paragraph } from '../reusable/styled';
import Carousel from 'react-elastic-carousel';

export const TitleHomeContainer = styled.div`
   display: flex;
   flex-direction:column;
   max-width: 45%;
   margin-right: 50px;
   justify-content: space-between;
   align-items: flex-start;
 `;

 export const ImgHomeContainer = styled.div`
   height: 480px;
   width: 480px;
   border-radius: 240px;
    overflow: hidden;
    outline: none;
   // position: relative;
    //left: 30px;

 `;

export const HeroHomeImg = styled.img`
    height: 480px;
 `;

export const CarouselHero = styled(Carousel)`
        position: relative;
        left: 30px;
    .rec.pagination {
        background: red;

        
    }
    .rec.rec-dot {
        outline: none;
        color: red;
        background-color: ${colors.middleGrey};
        box-shadow: none;
        //border: 1px solid #DEDCDC;
        width: 10px;
        height: 10px;
        margin-top: 10px;
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
`;