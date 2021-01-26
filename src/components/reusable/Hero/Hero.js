import React from 'react';

import { 
    TitleContainer,
    ImgContainer,
    HeroImg,
    SubTitle,
    HeroWrapper
 } from './Hero.elements';

import { Container, Wrapper, TitleLeft, Button } from '../styled';


function Hero({
    title,
    subtitle,
    buttonText,
    img,
    form
} ) {
    return (
            <Container lightBlue>
                <Wrapper>
                    <HeroWrapper>
                        <TitleContainer>
                            <TitleLeft > {title} </TitleLeft>
                            <SubTitle > {subtitle} </SubTitle>
                            {/* <ButtonInputGroup /> */} 
                            <Button href={form} target="blank">MÁM ZÁJEM</Button> 
                        </TitleContainer>
                        <ImgContainer>
                            <HeroImg src={img} />
                        </ImgContainer>
                    </HeroWrapper>
                </Wrapper>
            </Container>
    )
}

export default Hero;
