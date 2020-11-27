import React from 'react';
import { GalleryContainer, GalleryImg } from './Gallery.elements';
import { galleryArr } from './galleryArr';
import { Container, TitleCenter, WrapperColumn } from '../reusable/styled';

function Gallery() {
    return (
        <Container lightblue>
            <WrapperColumn>
                <TitleCenter>Fotogalerie</TitleCenter>
                <GalleryContainer>
                    {galleryArr.map((picture) => (
                        <GalleryImg src={picture.url} />
                        )
                    )} 
                </GalleryContainer>
            </WrapperColumn>
        </Container>
    )
}

export default Gallery
