import React from 'react';
import { GalleryContainer, GalleryImg, CarouselGallery, WrapperGallery } from './Gallery.elements';
import { galleryArr } from './galleryArr';
import { Container, TitleCenter, Wrapper } from '../reusable/styled';


function Gallery() {
    return (
        <Container >
            <Wrapper>
                <WrapperGallery>
                    <TitleCenter>Fotogalerie</TitleCenter>
                    <GalleryContainer>
                        <CarouselGallery  itemsToShow={2} itemsToScroll={1} pagination={false}  >
                            {galleryArr.map((picture) => (
                                <GalleryImg key={picture.url} src={picture.url} />
                                )
                            )} 
                        </ CarouselGallery>
                    </GalleryContainer>
                </WrapperGallery>
            </Wrapper>
        </Container>
    )
}

export default Gallery
