import React from 'react';

import { 
    TitleContainer,
    ImgContainer,
    HeroImg,
    SubTitle,
 } from './Hero.elements';

import { Container, Wrapper, TitleLeft } from '../styled';
import  ButtonInputGroup from '../ButtonInputGroup/ButtonInputGroup';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Hero({
    title,
    subtitle,
    buttonText,
    img1,img2,img3,img4,img5,img6
} ) {
    return (
            <Container lightblue>
                <Wrapper>
                    <TitleContainer>
                        <TitleLeft > {title} </TitleLeft>
                        <SubTitle > {subtitle} </SubTitle>
                        <ButtonInputGroup />
                    </TitleContainer>
                    <ImgContainer>
                    <Carousel>
                        <HeroImg src={img1} />
                        <HeroImg src={img2} />
                        <HeroImg src={img3} />
                        <HeroImg src={img4} />
                        <HeroImg src={img5} />
                        <HeroImg src={img6} />

                    </Carousel>
                    </ImgContainer>

                </Wrapper>

            </Container>
    )
}

export default Hero;
