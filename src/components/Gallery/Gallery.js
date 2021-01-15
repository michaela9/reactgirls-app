import React from 'react';
import { GalleryContainer, GalleryImg, CarouselGallery, WrapperGallery, SliderGallery } from './Gallery.elements';
import { galleryArr } from './galleryArr';
import { Container, TitleCenter, Wrapper } from '../reusable/styled';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Gallery() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        accessibility: true,
        responsive: [
            {
            breakpoint: 1500,
            settings: {
                slidesToShow: 2
                }
            },
            {
            breakpoint: 1120,
            settings: {
                slidesToShow: 1
                }
            },
            {
            breakpoint: 700,
            settings: {
                slidesToShow: 1
                }
            }
        ]
        }

    return (
        <Container >
            <Wrapper>
                <WrapperGallery>
                    <TitleCenter>Fotogalerie</TitleCenter>
                    <GalleryContainer>
                        <SliderGallery {...settings}>
                            {galleryArr.map((picture) => (
                                <GalleryImg key={picture.url} src={picture.url} />
                                )
                            )} 
                        </SliderGallery>
                    </GalleryContainer>
                </WrapperGallery>
            </Wrapper>
        </Container>
    )
}

export default Gallery
