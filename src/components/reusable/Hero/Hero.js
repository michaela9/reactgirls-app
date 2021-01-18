import React, { useState } from 'react';
import { useTheme, useThemeUpdate } from '../../../ThemeContext';

import { 
    TitleContainer,
    ImgContainer,
    HeroImg,
    SubtitleHero,
    HeroWrapper,
    HeroTitle
 } from './Hero.elements';

import { Container, Wrapper, Button } from '../styled';


function Hero({
    title,
    subtitle,
    buttonText,
    img,
    form
} ) {
    const navLogo = useTheme();
    const changeLogoSize = useThemeUpdate();

    return (
            <Container lightBlue>
                <Wrapper>
                    <HeroWrapper className={navLogo ? 'active' : ''} >
                        <TitleContainer>
                            <HeroTitle > {title} </HeroTitle>
                            <SubtitleHero > {subtitle} </SubtitleHero>
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
