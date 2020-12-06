import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';

export const SponsorContainer = styled.div`
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`;

export const SponsorImg = styled.img`
    height: 100px;
    outline: none;
    border: none;
`;

export const CarouselSponsor = styled(Carousel)`
    outline: none;
    border: none;
`;

