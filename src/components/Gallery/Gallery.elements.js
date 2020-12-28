import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import { colors } from '../../variables';


export const WrapperGallery = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    //border: 1px solid red;
`;


export const CarouselGallery = styled(Carousel)`
    //border: 1px solid red;
    .rec.rec-arrow-left {
        background-color: ${colors.white};
        color: ${colors.grey} ;
        box-shadow: none;
        //position: relative;
        //left: 45px;
    }
   .rec.rec-arrow-right {
        background-color: ${colors.white};
        color: ${colors.grey} ;
        box-shadow: none;
        //position: relative;
        //right: 70px;
    }
    .rec.rec-arrow:hover {
        color: ${colors.mainBlue};
    }
    .rec.rec-arrow:disabled {
        visibility: hidden;
    } 
`;

export const GalleryContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    padding-top: 80px;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    //position: relative;
    //left: 10px;
    //border: 1px solid red;
`;

export const GalleryImg = styled.img`
    height: 350px;
    margin-right: 20px;
`;



