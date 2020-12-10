import React from 'react';
import { GalleryContainer, GalleryImg, CarouselGallery } from './Gallery.elements';
import { galleryArr } from './galleryArr';
import { Container, TitleCenter, WrapperColumn } from '../reusable/styled';


function Gallery() {
    return (
        <Container lightBlue>
            <WrapperColumn>
                <TitleCenter>Fotogalerie</TitleCenter>
                <GalleryContainer>
                <CarouselGallery  itemsToShow={2} itemsToScroll={1} pagination={false}  >
                    {galleryArr.map((picture) => (
                        <GalleryImg src={picture.url} />
                        )
                    )} 
                </ CarouselGallery>
                </GalleryContainer>
            </WrapperColumn>
        </Container>
    )
}

export default Gallery
