import React from 'react';

import { 
    TitleContainer,
    ImgContainer,
    HeroImg,
    SubTitle,
 } from './Hero.elements';

import { Container, Wrapper, TitleLeft, Button } from '../styled';
import  ButtonInputGroup from '../ButtonInputGroup/ButtonInputGroup';


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
                    <TitleContainer>
                        <TitleLeft > {title} </TitleLeft>
                        <SubTitle > {subtitle} </SubTitle>
                        {/* <ButtonInputGroup /> */} 
                        <Button href={form} target="blank">MÁM ZÁJEM</Button> 
                    </TitleContainer>
                    <ImgContainer>
                        <HeroImg src={img} />
                    </ImgContainer>

                </Wrapper>

            </Container>
    )
}

export default Hero;
