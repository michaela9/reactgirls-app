import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import { colors } from '../../variables';

export const CarouselGallery = styled(Carousel)`
    .rec.rec-arrow-left, .rec.rec-arrow-right {
        background-color: ${colors.lightBlue} ;
        color: ${colors.grey} ;
        box-shadow: none;
    }
    .rec.rec-arrow:hover {
        color: ${colors.mainBlue};
    }
    .rec.rec-arrow:disabled {
        visibility: hidden;
    } 
`;

export const GalleryContainer = styled.div`
    width: 1280px;
    display: flex;
    padding-top: 80px;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    padding-right: 15px;
    padding-left: 15px;
`;

export const GalleryImg = styled.img`
    height: 350px;
    margin-right: 20px;
`;



