import React, { useState } from 'react';

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
    const [logoPadding, setLogoPadding] = useState(false);

    const changePadding = () => {
        setLogoPadding(true);
    }
    window.addEventListener("scroll", changePadding);
    return (
            <Container lightBlue>
                <Wrapper>
                    <HeroWrapper className={logoPadding ? 'active' : ''} >
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
