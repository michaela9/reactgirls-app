import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import { colors } from '../../variables';

export const CarouselGallery = styled(Carousel)`
    .rec.rec-arrow-left {
        background-color: ${colors.lightBlue} ;
        color: ${colors.grey} ;
        box-shadow: none;
        position: relative;
        left: 45px;
    }
   .rec.rec-arrow-right {
        background-color: ${colors.lightBlue} ;
        color: ${colors.grey} ;
        box-shadow: none;
        position: relative;
        right: 70px;
    }
    .rec.rec-arrow:hover {
        color: ${colors.mainBlue};
    }
    .rec.rec-arrow:disabled {
        visibility: hidden;
    } 
`;

export const GalleryContainer = styled.div`
    width: 1430px;
    display: flex;
    padding-top: 80px;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    position: relative;
    left: 10px;
`;

export const GalleryImg = styled.img`
    height: 350px;
    margin-right: 20px;
`;



